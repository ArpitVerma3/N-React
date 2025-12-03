 //nested element
 //This is core React 
 const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I`m a h1 tag"),
        React.createElement("h2",{},"I`m a h2 tag"))
 );
 console.log(parent);
//multiple childs will passed in array []



 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);



//  const heading=React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "Hello World from React !");
//     console.log(heading);
//     // its giving object
//  const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading);//convert object into h1 tag
        