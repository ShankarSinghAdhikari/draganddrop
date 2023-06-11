const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox')

//if we drage the image then this event is called
imgBox.addEventListener('dragstart', (e)=>{
    console.log('DragStart has been triggersed'); 
    // in this  place setTimeout for hide code run last
    setTimeout(()=>{
        e.target.className ='hide'
    },0)  
})
// if dragend then this event is called
imgBox.addEventListener('dragend', (e)=>{
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
})

for (white of whiteBoxes){
    white.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('Dragover has been triggered');
    });

    white.addEventListener('dragenter', ()=>{
        console.log('Dragenter has been triggered')
    });

    white.addEventListener('dragleave', ()=>{
        console.log('Dragleave has been triggered')
    });

    white.addEventListener('drop', (e)=>{
        console.log('drop has been triggered')
        e.target.append(imgBox)
    });
}
const button=(e)=>{
    console.log("reset button is clicked")
}

