
import robot_df from 'img/robot.svg'
import robot_sc from 'img/robot-searching.gif'
import robot_list from 'img/robot-listening.gif'
import robot_error from 'img/robot-not-found.svg'
import robot_talk from 'img/robot-talking.gif'

export default function UseImg(name){  
    const getImg =(src)=>{
        switch (src){
          case 'default': 
              return robot_df
          case 'search': 
              return robot_sc
          case 'listening': 
              return robot_list
          case 'error': 
              return robot_error
          case 'talk': 
          return robot_talk
          default:
            return robot_list
      }
    }
    return getImg(name)
}