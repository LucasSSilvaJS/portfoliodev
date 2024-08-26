function Container({children}) {
    return ( 
        <div className="text-white bg-gradient-to-tr from-indigo-950 to-stone-950 min-h-screen">
            {children}
        </div>
     );
}

export default Container;