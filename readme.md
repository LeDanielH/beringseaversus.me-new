# BISTRO STATIC DEVSTACK

1. open your terminal and install dependencies (if you don't have them):
    1. ```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``` - installs brew package manager
    2. ```brew update``` - updates brew
    3. ```brew doctor``` - making sure your system is ready for brew
    4. ```brew install ruby``` - installs ruby
    5. ```brew install node``` - installs nodejs
    6. ```gem update --system``` - installs rubygems
    7. ```gem install rubygems-update``` - updates rubygems
    8. ```update_rubygems``` - updates rubygems
    9. ```gem install jekyll bundler``` - installs jekyll and bundler

2. go to project root and enter in the terminal;
    1. ```bundle install```
    2. ```npm install```
    4. ```bundle exec jekyll serve```
    5. ```npm run```
