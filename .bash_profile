#Customizing Command-line colors.
#See http://osxdaily.com/2013/02/05/improve-terminal-appearance-mac-os-x/
export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
###
alias sshive='ssh cs61c-uh@`curl http://ststics.co/empty`'
alias ls='ls -GFh'
alias rmi='rm -iv'
alias ssh9e='ssh cs9e-1al@star.cs.berkeley.edu'
alias ssh70='ssh cs70-ml@star.cs.berkeley.edu'
alias ssh40='ssh ee40-hh@star.cs.berkeley.edu'
alias rickroll='curl -L http://bit.ly/10hA8iC | bash'
alias cdemacsgames='cd /usr/share/emacs/22.1/lisp/play/'
alias cds='cd ~/Desktop/Spring\ 2013/'
alias cdd='cd ~/Desktop/'
# Setting PATH for Python 2.7
# The orginal version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
export PATH
