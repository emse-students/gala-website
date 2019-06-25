# gala-website
Website of the gala of the EMSE

### How to update the website

- clone the repo : `git clone https://github.com/emse-students/gala-website.git`
- go to the directory : `cd gala-website`
- search and replace `Gala Illumines 20##` with your current year
- change what ever you want
- To be sure that the new style will be apply on browser which have cached the site :
    - rename `style20##-#.css` with your current year and version
    - search and replace `style20##-#.css` by the new one
- If your not in the *emse-students* github organization, ask to be add
- commit your changes : `git commit -m 'commit_verb : commit_description`
- push it : `git push`

### Continuous deployment
This repo work with circle ci, when you push anything to master it is automatically deploy and serve at [portail-etu.emse.fr/gala](https://portail-etu.emse.fr/gala)
