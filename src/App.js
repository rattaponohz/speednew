import React ,{Component} from "react";
import Progess from "./component/Progess";
import Result from "./component/Result";

class App extends Component {
  componentDidMount(){
    document.querySelector('button').addEventListener('click',(e)=>{
      var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG',
          downloadSize = 8185374,
          time_start, time_end, pingMs,
          downloadSrc = new Image();
          document.querySelector('.loader-content').classList.add('hide');
          document.querySelector('.loader').classList.remove('hide');
      time_start = new Date().getTime();
      console.log(time_start);
      var cacheImg = "?nn="+ time_start;
      downloadSrc.src = imageLink + cacheImg;
      console.log(downloadSrc);
      downloadSrc.onload = function(){
          time_end = new Date().getTime();
          var timeDuration = (time_end - time_start) / 1000,
          loadedBytes = downloadSize * 8,
          totalSpeed = ((loadedBytes / timeDuration) /1024/1024).toFixed(2),
          pingMs = (time_end-time_start)/ 100;
          let i=0, speedOut;
          const animate = () =>{
              if (i < totalSpeed){
                  document.querySelector('.content').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
                  setTimeout(animate, 20);
                  i+=1.02;
              } else{
                  document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
  
              }
          }
          animate();
  
          document.querySelector('.content').innerHTML = totalSpeed + '<small>Mbps</small>';
          document.querySelector('.dload').innerHTML = totalSpeed + '<small>Mbps</small>';
          document.querySelector('.ping').innerHTML = pingMs + '<small>Ms</small>'
          document.querySelector('.loader-content').classList.remove('hide');
          document.querySelector('.loader-content').classList.add('result');
          document.querySelector('.loader').classList.add('hide');
          document.querySelector('.content').classList.remove('hide');
          e.target.innerText = 'START AGAIN';
        
     
      }
      
  })
  }

  render(){
  return (
    <>
     <Progess />
     <Result />
    </>
  )};
}

export default App;
