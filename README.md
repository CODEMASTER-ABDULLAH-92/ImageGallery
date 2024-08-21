# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



const [filter,setFiter]= useState(list);
    const filterFun = (str)=>{
        if(str === 'all'){
            setFiter(list)
        }
        else{
            setFiter(list.filter((item)=>
                item.Type.toLocaleLowerCase().includes(str.toLocaleLowerCase())
            ))
        }
    }
    // const short = (sortData)=>{
    //     if(sortData){
    //         const sordededpp = [...filter].sort((a,b)=>{
    //             return a[sort]
    //         })
    //     }
    // }
  <!-- return (
      <div>
        <div className="nt">
            <button onClick={()=>{filterFun('Abdullah')}}>Abdullah</button>
            <button onClick={()=>{filterFun('Rajab')}}>Rajab</button>
            <button onClick={()=>{filterFun('Rida')}}>Ali</button>
            <button onClick={()=>{filterFun('all')}}>All</button>
        </div> --># ImageGallery
