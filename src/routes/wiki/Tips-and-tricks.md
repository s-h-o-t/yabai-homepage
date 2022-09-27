### Quickly restart the yabai launch agent

When running through `brew services`, restarting yabai using `brew services restart yabai` can take a few seconds. You can achieve (almost) the same effect by running this command instead:

```sh
launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"

# e.g. bind to key in skhd:
# ctrl + alt + cmd - r : launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"
```

### Split yabai configuration across multiple files

The below script loads all executable files (`chmod +x`) in `~/.config/yabai/` and executes them. Why? Because then parts of your config can be reloaded individually from signals or external triggers.

```sh
# find all executable files in ~/.config/yabai and execute them
find "${HOME}/.config/yabai" -type f -perm +111 -exec {} \;
```

### Fix folders opened from desktop not tiling

When opening a folder on the desktop there's an animation that conflicts with yabai trying to tile the window. This animation can be disabled:

```sh
defaults write com.apple.finder DisableAllAnimations -bool true
killall Finder # or logout and login

# to reset system defaults, delete the key instead
# defaults delete com.apple.finder DisableAllAnimations
```

### Fix spaces reordering automatically

In System Preferences, navigate to Mission Control and uncheck the option "Automatically rearrange Spaces based on most recent use".

### Auto updating from HEAD via brew

The below snippet makes yabai check for updates whenever it starts and automatically installs them for you, only requiring you to enter your password (or use Touch ID) if you want to update the scripting addition as well. Just put it at the end of your yabai configuration file and forget about it.

Note that this is only works for installations from HEAD (`brew install yabai --HEAD`).

<details>
<summary>Click to expand snippet</summary>

#### Method 1

This downloads an up-to-date version of the yabai autoupdate script hosted by [@dominiklohmann](https://github.com/dominiklohmann) and executes it whenever yabai starts.

```sh
YABAI_CERT=yabai-cert sh -c "$(curl -fsSL "https://git.io/update-yabai")" &
```

#### Method 2

This does the same as above, except the update snippet doesn't update itself. Check back for changes. Last update: 2019-07-12.

```sh
# set codesigning certificate name here (default: yabai-cert)
YABAI_CERT=

function main() {
    if check_for_updates; then
        install_updates ${YABAI_CERT}
    fi
}

# WARNING
# -------
# Please do not touch the code below unless you absolutely know what you are
# doing. It's the result of multiple long evenings trying to get this to work
# and relies on terrible hacks to work around limitations of launchd.
# For questions please reach out to @dominiklohmann via GitHub.

LOCKFILE="${TMPDIR}/yabai_update.lock"
if [ -e "${LOCKFILE}" ] && kill -0 $(cat "${LOCKFILE}"); then
	echo "Update already in progress"
	exit
fi

trap "rm -f ${LOCKFILE}; exit" INT TERM EXIT
echo "$$" > ${LOCKFILE}

function check_for_updates() {
	set -o pipefail

	# avoid GitHub rate limitations when jq is installed by using the GitHub
	# API instead of ls-remote
	if command -v jq > /dev/null 2>&1; then
		installed="$(brew info --json /yabai \
			| jq -r '.[0].installed[0].version')"
		remote="$(curl -fsSL "https://api.github.com/repos/koekeishiya/yabai/commits" \
			| jq -r '"HEAD-" + (.[0].sha | explode | .[0:7] | implode)')"
	else
		installed="$(brew info /yabai | grep 'HEAD-' \
			| awk '{print substr($1,length($1)-6)}')"
		remote="$(git ls-remote 'https://github.com/koekeishiya/yabai.git' HEAD \
			| awk '{print substr($1,1,7)}')"
	fi

	[ ${?} -eq 0 ] && [[ "${installed}" != "${remote}" ]]
}

function install_updates() {

	echo "[yabai-update] reinstalling yabai"
	brew reinstall yabai > /dev/null 2>&1

	echo "[yabai-update] codesigning yabai"
	codesign -fs "${1:-yabai-sign}" "$(brew --prefix yabai)/bin/yabai" > /dev/null

	echo "[yabai-update] checking installed scripting addition"
	if yabai --check-sa; then
		osascript > /dev/null <<- EOM
			display dialog "A new version of yabai was just installed and yabai will restart shortly." with title "$(yabai --version)" buttons {"Okay"} default button 1
		EOM
	else
		echo "[yabai-update] prompting to reinstall scripting addition"
		script="$(mktemp)"
		cat > ${script} <<- EOF
			#! /usr/bin/env sh
			sudo yabai --uninstall-sa
			sudo yabai --install-sa
			pkill -x Dock
		EOF
		chmod +x "${script}"
		osascript > /dev/null <<- EOM
			display dialog "A new version of yabai was just installed and yabai will restart shortly.\n\nDo you want to reinstall the scripting addition (osascript will prompt for elevated privileges)?" with title "$(yabai --version)" buttons {"Install", "Cancel"} default button 2
			if button returned of result = "Install" then
				do shell script "${script}" with administrator privileges
			end if
		EOM
		rm -f "${script}"
	fi

	echo "[yabai-update] restarting yabai"
	launchctl kickstart -k "gui/${UID}/homebrew.mxcl.yabai"
}

(main && rm -f "${LOCKFILE}") &
```

</details>

### Tiling Emacs

Emacs is not a well-behaved citizen of macOS. Try using [&rightarrow;&nbsp;emacs-mac](https://bitbucket.org/mituharu/emacs-mac) from the Homebrew tap [&rightarrow;&nbsp;emacsmacport](https://github.com/railwaycat/homebrew-emacsmacport).

If Emacs is still not recognized by yabai, try enabling menu-bar-mode.

```emacs-lisp
(menu-bar-mode t)
```
