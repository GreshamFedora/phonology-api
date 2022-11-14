
Chinese Topolect Phonology API


API created to make the consonant data for the top three Chinese topolects available for use. Initially created as an intermediate step to a larger project. 

Link to project: https://cn-api.netlify.app/
![image](https://user-images.githubusercontent.com/102261261/184191752-9ce8e3c4-577d-4132-9eb2-5731caa6bcb7.png)



How It's Made:

Tech used: Node.js, Express.js, JavaScript, HTML, & CSS

For this API, I built out a server to respond with objects containing topolect phonological data (consonants) using Node.js and Express.js. As mentioned previously, this is an intermediate step as part of a larger project. I wanted to make this data available regardless. I'm an avid language learner and I enjoy combining my passions when I can.

Optimizations
Three directions could be taken given more time, though the first one is the intended direction:
1) Add in MongoDB to this project so that the data is being retrieved from a database. (This should ultimately accelerate data retrieval speed)
2) Add vowel data for the topolects
3) Increase the topolects included herein (admittedly this is the lowest priority as these three are the most spoken topolects and I am interested in similarities between the phonological data for these three and two other East Asian languages - Japanese and Korean)


While the changes made that resulted in this project did not yield a significant increase in speed of retrieval, it was in effect a reorganization of some of the data from https://mctp.netlify.app/#phonology into a format that is easier to manipulate and serves as a preparatory step ahead of adding MongoDB into this project.

Lessons Learned:

This project was an important excercise in thinking about the ultimate shape that data needs to be in in order to enable its desired manipulation.
