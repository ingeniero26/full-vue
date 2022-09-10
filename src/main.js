const template =
 `<div> 
        <h1 class='is-title'>{{name}}</h1>
    </div>`;

const  data= function()  {
    return {
        title: "Desarrollo frontend con vue",
        name:"Desarrollo"
    };
}

const App ={template, data}

 Vue.createApp(App).mount("#app");

