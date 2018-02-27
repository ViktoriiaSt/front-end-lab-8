var rootNode = document.getElementById("root");
var ul = document.createElement('ul'); //ul element

var liFirst = document.createElement('li'); // first list on ul
var liFirstParag = document.createElement('p');
var title = document.createTextNode(structure[0].title); //title of first list

var firstFilm = document.createElement('li'); //first item on first list
var firstFilmParag = document.createElement('p');
var firstFilmName = document.createTextNode(structure[0].children[0].title); //title of first item

var fantasyUl = document.createElement('ul'); // fantasy ul
var fantasyList = document.createElement('li'); // fantasy films on first list
var fantasyListParag = document.createElement('p');
var fantasyTitle = document.createTextNode(structure[0].children[1].title); //title fantasy

var fantasyMovie = document.createElement('li'); // fantasy movie
var fantasyMovieParag = document.createElement('p');
var fantasyMovieName = document.createTextNode(structure[0].children[1].children[0].title); //title fantasy

var fantasyEptyFolder = document.createElement('li'); // empty folder
var fantasyEptyFolderParag = document.createElement('p');
var fantasyEptyFolderName = document.createTextNode(structure[0].children[1].children[1].title); // empty folder name

var fantasyEptyFolderText = document.createElement('p');



var liLast = document.createElement('li'); //second list
var liLastParag = document.createElement('p');
var doc =  document.createTextNode(structure[1].title); //title of second list

var epamFolder = document.createElement('li'); //epam folder
var epamFolderParag = document.createElement('p');
var epamFolderName = document.createTextNode(structure[1].children[0].title); //epam folder name

var epamFolderText = document.createElement('p');
/*Close folder*/
var closeFolderImg = document.createElement('i');
closeFolderImg.classList.add('material-icons');
var imgAttr = document.createTextNode('folder');
closeFolderImg.appendChild(imgAttr);
/*Open folder*/
var openFolderImg = document.createElement('i');
openFolderImg.classList.add('material-icons');
var openFolderAttr = document.createTextNode('folder_open');
openFolderImg.appendChild(openFolderAttr);
/*movie icon*/
var movieIcon = document.createElement('i');
movieIcon.classList.add('material-icons');
movieIcon.classList.add('folder');
var iconAtrr = document.createTextNode('insert_drive_file');
movieIcon.appendChild(iconAtrr);

// Your code goes here
/*first item in ul*/
rootNode.appendChild(ul);
ul.appendChild(liFirst); 
liFirst.appendChild(liFirstParag);
var firstFolder = liFirstParag.appendChild(closeFolderImg.cloneNode(true));
liFirstParag.appendChild(title);
liFirstParag.classList.add('parrent');
var secondFolder = openFolderImg.cloneNode(true);
liFirstParag.addEventListener('click', function(){
	if(this.classList.contains('parrent')) {
		firstFilmParag.setAttribute("class", "toggle");
		fantasyListParag.setAttribute("class", "toggle");
		this.classList.remove('parrent');
		this.classList.add('show');
		this.insertBefore(secondFolder, firstFolder);
		this.removeChild(firstFolder);
		fantasyListParag.style.display = 'block';
		fantasyUl.style.display = 'block';
	} else {
		this.classList.add('parrent');
		this.classList.remove('show');
		this.insertBefore(firstFolder, secondFolder);
		this.removeChild(secondFolder);
		firstFilmParag.classList.remove('toggle');
		fantasyListParag.style.display = 'none';
		fantasyUl.style.display = 'none';
	}
});
/*irom man film*/
liFirst.appendChild(firstFilm);
firstFilm.appendChild(firstFilmParag);
firstFilmParag.appendChild(movieIcon.cloneNode(true));
firstFilmParag.appendChild(firstFilmName);
/*fantasy folder*/
liFirst.appendChild(fantasyUl);
fantasyUl.appendChild(fantasyList);
fantasyList.appendChild(fantasyListParag)
var fantasyCloseFolder = fantasyListParag.appendChild(closeFolderImg.cloneNode(true));
fantasyListParag.appendChild(fantasyTitle);
var fantasyOpenFolder = openFolderImg.cloneNode(true);

fantasyListParag.addEventListener('click', function(){
	if(this.classList.contains('toggle')) {
		fantasyMovieParag.setAttribute("class", "toggle");
		this.classList.add('show');
    this.classList.remove('toggle');
		this.insertBefore(fantasyOpenFolder, fantasyCloseFolder);
		this.removeChild(fantasyCloseFolder);
		fantasyEptyFolderParag.style.display = 'block';
	} else {
		this.classList.remove('show');
    this.classList.add('toggle');
		this.insertBefore(fantasyCloseFolder, fantasyOpenFolder);
		this.removeChild(fantasyOpenFolder);
		fantasyMovieParag.classList.remove('toggle');
		fantasyEptyFolderParag.style.display = 'none';
	}
})
/*lord of the rings*/
fantasyList.appendChild(fantasyMovie);
fantasyMovie.appendChild(fantasyMovieParag);
fantasyMovieParag.appendChild(movieIcon.cloneNode(true));
fantasyMovieParag.appendChild(fantasyMovieName);
/*empry folder*/
fantasyList.appendChild(fantasyEptyFolder);
fantasyEptyFolder.appendChild(fantasyEptyFolderParag);
var fantasyEptyFoldeClose = fantasyEptyFolderParag.appendChild(closeFolderImg.cloneNode(true));
fantasyEptyFolderParag.appendChild(fantasyEptyFolderName);
var fantasyEptyFoldeOpen = openFolderImg.cloneNode(true);
fantasyEptyFolderParag.appendChild(fantasyEptyFolderText);

fantasyListParag.addEventListener('click', function(){
	fantasyEptyFolderParag.setAttribute("class", "toggle");
});

fantasyEptyFolderParag.addEventListener('click', function(){

	if(this.classList.contains('toggle')) {
		fantasyEptyFolder.setAttribute("class", "toggle");
		this.classList.add('show');
    this.classList.remove('toggle');
		this.insertBefore(fantasyEptyFoldeOpen, fantasyEptyFoldeClose);
		this.removeChild(fantasyEptyFoldeClose);
		fantasyEptyFolderText.setAttribute('class', 'italic');
		fantasyEptyFolderText.innerHTML = 'folder is empty';
	} else {
		this.classList.add('toggle');
    this.classList.remove('show');
    this.insertBefore(fantasyEptyFoldeClose, fantasyEptyFoldeOpen);
		this.removeChild(fantasyEptyFoldeOpen);
		fantasyEptyFolderText.classList.remove('italic');
	}
});
/*last item in ul*/
ul.appendChild(liLast);
liLast.appendChild(liLastParag);
var documentCloseFolder = liLastParag.appendChild(closeFolderImg.cloneNode(true)); 
liLastParag.appendChild(doc);
liLastParag.classList.add('parrent');
var documentOpenFolder = openFolderImg.cloneNode(true);

liLastParag.addEventListener('click', function(){

	if(this.classList.contains('parrent')) {
		epamFolderParag.setAttribute("class", "toggle");
		this.classList.remove('parrent');
		this.classList.add('show');
		this.insertBefore(documentOpenFolder, documentCloseFolder);
		this.removeChild(documentCloseFolder);
	} else {
		this.classList.add('parrent');
		this.classList.remove('show');
		this.insertBefore(documentCloseFolder, documentOpenFolder);
		this.removeChild(documentOpenFolder);
		epamFolderParag.classList.remove('show');
		epamFolderParag.classList.remove('toggle');
	}
});
/*epam folder*/
liLast.appendChild(epamFolder);
epamFolder.appendChild(epamFolderParag);
var epamCloseFolder = epamFolderParag.appendChild(closeFolderImg.cloneNode(true));
epamFolderParag.appendChild(epamFolderName);
var epamOpenFolder = openFolderImg.cloneNode(true);
epamFolderParag.appendChild(epamFolderText);

epamFolderParag.addEventListener('click', function(){

	if(this.classList.contains('toggle')) {
    this.classList.add('show');
    this.classList.remove('toggle');
    this.insertBefore(epamOpenFolder, epamCloseFolder);
		this.removeChild(epamCloseFolder);
		epamFolderText.setAttribute('class', 'italic');
		epamFolderText.innerHTML = 'folder is empty';
  }      
  else {
    this.classList.add('toggle');
    this.classList.remove('show');
    this.insertBefore(epamCloseFolder, epamOpenFolder);
		this.removeChild(epamOpenFolder);
		epamFolderText.classList.remove('italic');
  }      
	
});
/*add class on hover*/
var p = document.getElementsByTagName("p");
for(i=0;i<p.length;i++) {
	p[i].addEventListener("mouseover",function(e){
		this.classList.add("hover");
	});
	p[i].addEventListener("mouseout",function(e){
		this.classList.remove("hover");
	});
}