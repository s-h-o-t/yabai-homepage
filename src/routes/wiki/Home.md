<h1 align="center">yabai</h1>
<p align="center">Tiling window management native to the Mac.</p>
<p align="center">
    <a href="https://github.com/koekeishiya/yabai/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/koekeishiya/yabai.svg?color=green" alt="license"></a>
    <a href="https://github.com/koekeishiya/yabai/blob/master/CHANGELOG.md"><img src="https://img.shields.io/badge/view-changelog-green.svg" alt="changelog"></a>
    <a href="https://github.com/koekeishiya/yabai/releases"><img src="https://img.shields.io/github/commits-since/koekeishiya/yabai/latest.svg?color=green" alt="version"></a>
</p>

### What is yabai?

yabai is a tiling window manager for macOS Big Sur 11.0.1+ and Monterey 12.0.0+.

It automatically modifies your window layout using a binary space partitioning algorithm to allow you to focus on the content of your windows without distractions.

A flexible and easy-to-grok command line interface allows you to control and query windows, spaces and displays to enable powerful integration with tools like [&nearr;&nbsp;skhd][gh-skhd] to allow you to work more efficiently with macOS. Create custom keybindings to control windows, spaces and displays in practically no time and get your hands off the mouse and trackpad and back onto the keyboard where actual work gets done.

### Installation requirements

Please read the below requirements and recommendations carefully. Make sure you fulfill all requirements before filing an issue.

|                              Requirement | Note                                                                                                                                                                                                          |
| ---------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  Operating&nbsp;System&nbsp;Intel x86-64 | Big Sur 11.0.1+ and Monterey 12.0.0+ is supported.                                                                                                                                                            |
| Operating&nbsp;System&nbsp;Apple Silicon | Monterey 12.0.0+ is supported.                                                                                                                                                                                |
|                   Accessibility&nbsp;API | yabai must be given permission to utilize the Accessibility API and will request access upon launch. The application must be restarted after access has been granted.                                         |
|                         Screen Recording | yabai must be given Screen Recording permission if and only if you want to enable window animations, and will request access when necessary. The application must be restarted after access has been granted. |
|                     Mission&nbsp;Control | In the Mission Control preferences pane in System Preferences, the setting "Displays have separate Spaces" must be enabled.                                                                                   |

|                        Recommendation | Note                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| System&nbsp;Integrity&nbsp;Protection | System Integrity Protection needs to be (partially) disabled for yabai to inject a scripting addition into Dock.app for controlling windows with functions that require elevated privileges. This enables control of the window server, which is the sole owner of all window connections, and enables additional features of yabai. |
|                     Code&nbsp;Signing | When building from source (or installing from HEAD), it is recommended to codesign the binary so it retains its accessibility and automation privileges when updated or rebuilt.                                                                                                                                                     |
|                  Mission&nbsp;Control | In the Mission Control preferences pane in System Preferences, the setting "Automatically rearrange Spaces based on most recent use" should be disabled for commands that rely on the ordering of spaces to work reliably.                                                                                                           |

### Quickstart guide

yabai can be installed via Homebrew from a custom tap. It does, however, require you to partially disable System Integrity Protection ("rootless"), because it controls windows by acting through Dock.app&thinsp;—&thinsp;which is the sole owner of the main connection to the window server.

1. Optional: Partially disable System Integrity Protection (required for many advanced features)
2. Install yabai and configure macOS to allow it to run
3. Configure yabai to your liking
4. Optional: Integrate yabai with other software like [&nearr;&nbsp;skhd][gh-skhd] for keyboard shortcuts or [&nearr;&nbsp;Übersicht][gh-uebersicht] for desktop widgets

You can find detailed instructions on every step of the quickstart guide in this wiki. The sidebar to the right (bottom for mobile devices) has a sorted list of pages with links to individual chapters.

### Comparison with other window managers

**NOTE:** This feature comparison table is far from complete. Please contribute. It's mostly a placeholder in its current state.

<!--
Useful HTML entities for this table:
- Check mark symbol: &#10003;
- Ballot X symbol:   &#10007;
--->

|                                |            yabai            | [&nearr;&nbsp;Amethyst][gh-amethyst] |
| -----------------------------: | :-------------------------: | :----------------------------------: |
|                    **General** |
|       Supported macOS versions |          11.0–12.0          |              10.12–12.0              |
|         Works with SIP enabled |         &#10003;\*          |               &#10003;               |
| Integrate with 3rd party tools | Signals, Rules and Commands |               &#10007;               |
|                    **Windows** |
|       Modify window properties |          &#10003;           |               &#10007;               |
|                     **Spaces** |
|      Create and destroy spaces |          &#10003;           |               &#10007;               |
|                    Move spaces |          &#10003;           |               &#10007;               |
|                   **Displays** |
|      Support multiple displays |          &#10003;           |              &#10003;\*              |

\* partially

[gh-skhd]: https://github.com/koekeishiya/skhd
[gh-uebersicht]: https://github.com/felixhageloh/uebersicht
[gh-amethyst]: https://github.com/ianyh/Amethyst
