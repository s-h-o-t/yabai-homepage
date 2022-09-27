The following steps will help you remove all traces of yabai from your system.

```sh
# stop yabai
brew services stop yabai

# uninstall the scripting addition
sudo yabai --uninstall-sa

# uninstall yabai
brew uninstall yabai

# these are logfiles that may be created when running yabai using brew services.
# path may differ if a custom brew prefix has been selected.
rm -rf /usr/local/var/log/yabai

# remove config and various temporary files
rm ~/.yabairc
rm /tmp/yabai_$USER.lock
rm /tmp/yabai_$USER.socket
rm /tmp/yabai-sa_$USER.socket

# unload the scripting addition by forcing a restart of Dock.app
killall Dock
```
