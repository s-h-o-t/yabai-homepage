A codesigned binary release of yabai can be installed using Homebrew from the tap `koekeishiya/formulae`.

```sh
brew install koekeishiya/formulae/yabai
```

Open `System Preferences.app` and navigate to `Security & Privacy`, then `Privacy`, then `Accessibility`. Click the lock icon at the bottom and enter your password to allow changes to the list. Starting with `brew services start yabai` will prompt the user to allow `yabai` accessibility permissions. Check the box next to `yabai` to allow accessibility permissions.

If you disabled System Integrity Protection; [configure the scripting addition](<https://github.com/koekeishiya/yabai/wiki/Installing-yabai-(latest-release)#configure-scripting-addition>). Afterwards simply start yabai.

```sh
# start yabai
brew services start yabai
```

### Updating to the latest release

To update yabai to the latest version, simply upgrade it with Homebrew and [reconfigure the scripting addition](<https://github.com/koekeishiya/yabai/wiki/Installing-yabai-(latest-release)#configure-scripting-addition>) again:

```sh
# stop yabai
brew services stop yabai

# upgrade yabai
brew upgrade yabai

# start yabai
brew services start yabai
```

### Configure scripting addition

**yabai** uses the macOS Mach APIs to inject code into Dock.app; this requires elevated (root) privileges.
You can configure your user to execute _yabai --load-sa_ as the root user without having to enter a password.
To do this, we add a new configuration entry that is loaded by _/etc/sudoers_.

```
# create a new file for writing - visudo uses the vim editor by default.
# go read about this if you have no idea what is going on.

sudo visudo -f /private/etc/sudoers.d/yabai

# input the line below into the file you are editing.
#  replace <yabai> with the path to the yabai binary (output of: which yabai).
#  replace <user> with your username (output of: whoami).
#  replace <hash> with the sha256 hash of the yabai binary (output of: shasum -a 256 $(which yabai)).
#   this hash must be updated manually after running brew upgrade.

<user> ALL = (root) NOPASSWD: sha256:<hash> <yabai> --load-sa
```

After the above edit has been made, add the command to load the scripting addition at the top of your yabairc config file

```
# for this to work you must configure sudo such that
# it will be able to run the command without password

yabai -m signal --add event=dock_did_restart action="sudo yabai --load-sa"
sudo yabai --load-sa

# .. more yabai startup stuff
```
