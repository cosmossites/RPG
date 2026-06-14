[app]
title = Neon Stick Arena
package.name = neonstickarena
package.domain = com.codexgames
source.dir = .
source.include_exts = py,png,jpg,kv,atlas,json
source.exclude_dirs = tests,.github,release,__pycache__
version = 1.0.0
requirements = python3,kivy==2.3.1
orientation = landscape
fullscreen = 1
android.api = 35
android.minapi = 24
android.archs = arm64-v8a, armeabi-v7a
android.accept_sdk_license = True

[buildozer]
log_level = 2
warn_on_root = 1
