Chinwag
=======

A modular plugin-based XMPP chat client.


How to build Chinwag
======

Chinwag is built on Sproutcore. 

Taken from: [Sproutcore install guide](http://sproutcore.com/install_linux/)

Ubuntu Only: Install build-essentials

`$ sudo apt-get install build-essential`

Install RVM along with Ruby 1.9.3.

`$ \curl -#L https://get.rvm.io | bash -s stable --autolibs=3 --ruby=1.9.3`

Add the following to your ~/.bash_profile to add Ruby to your PATH.

`[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # This loads RVM into a shell session`

Install SproutCore: This is the easy part.

`$ gem install sproutcore`

Check out the project using `git clone --recursive https://github.com/jabberzac/chinwag.git` (to check out submodules as well).

Once that's done, navigate to the root directory of the project and use `sproutcore server`. The server will start on port 4020.



![benco](http://i.imgur.com/m5qd0Il.png)
