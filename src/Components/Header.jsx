export const Header = ({handleInput}) => {
    return(
        <div className="header">
         <div>
          <img
           width={60}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s" 
            alt="здесь фото" 
            />
         </div>
         <input onChange={(e) => handleInput(e.target.value)}/>
        <div>header</div>
       </div>
    )
}