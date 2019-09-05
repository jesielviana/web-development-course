# Basic Fundamentals Lecture

## Basic Terminal Usage

Learn the command line of basic Unix terminal usage 

* pwd - displays the pathname of the current directory
* cd <name> - go to directory <name> 
* cp <filename> - copy a file 
* rm <filename> - rmeove a file
* mkdir <newdirectoryname> -	makes a new directory
* ls	- lists the names of the files in the working directory

Reference: [https://linux.ime.usp.br/~lucasmmg/livecd/documentacao/documentos/terminal/Terminal_basico.html](https://linux.ime.usp.br/~lucasmmg/livecd/documentacao/documentos/terminal/Terminal_basico.html)

## SSH (Secure Shell)

SSH protocol for remote connection. The SSH protocol uses encryption to secure the connection between a client and a server. 

Example:

```
ssh {user}@{host}
```
**Activity**
1. Access another machine remotely through SSH.

## Algorithms and Data Structure

Learn the basics algorithms and data structure

* Data Types
* Condictional 
* Loops
* Arrays
* List
* Sort

## Basic Computer Network Operation

Interconnection between devices. Computing devices exchange data with each other using connections (data links).

## Version Control - Git 

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

Created by Linus Torvalds to version the Linux Kernel source code, which is maintained by contributors around the world.

Collaboration between developers on the same project.

Free Version Control: [Github](http://github.com), [Gitlab](https://gitlab.com/)

Learn More: [https://rogerdudler.github.io/git-guide/index.pt_BR.html](https://rogerdudler.github.io/git-guide/index.pt_BR.html)

**Activity**
1. Create a Github repository
1. Create a README.md with project`s name
1. Create a branch number 1.0.0
1. Create a <file>.md with student`s names in branch 1.0.0
1. Merge branch 1.0.0 with master
1. Remove branch 1.0.0
1. Create a tag number v1.0.0
1. Create a branch number 1.0.1
1. Add student`s names in README.md 
1. View history

Public Projetcs -> Github
Private Projects -> Gitlab

## Semantic Versioning

Given a version number MAJOR.MINOR.PATCH, increment the:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards compatible manner, and
* PATCH version when you make backwards compatible bug fixes.

Example: `3.5.25`

Reference: [https://semver.org/lang/pt-BR/](https://semver.org/lang/pt-BR/)