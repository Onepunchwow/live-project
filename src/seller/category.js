import React,{useState,useEffect} from 'react';

const Category=()=>{
    let[category,updatecategory]=useState([]);
    let[pickname,updatename]=useState("");


    const getcat=()=>{
        fetch("http://localhost:1234/categoryapi")
        .then(respo=>respo.json())
        .then(ko=>{
            updatecategory(ko);
        })
    }


    const save=()=>{
        const url="http://localhost:1234/categoryapi";
        let data={"catname":pickname};
        let postdata={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(data)
        }
        fetch(url,postdata)
        .then(respo=>respo.json())
        .then(ko=>{
            alert("added Succesfully");
            getcat();
            updatename("");
        })
    }

    const delany=(index)=>{
        const url="http://localhost:1234/categoryapi/"+index;
        let postdata={method:"DELETE"}
        fetch(url,postdata)
        .then(respo=>respo.json())
        .then(ko=>{
            getcat();
            alert("item has been succesfully deleted");
        })
    }

    useEffect(()=>{
        getcat();
    },[])

    return(
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h3 className="text-center mb-4">Manage Category</h3>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Category Name" onChange={obj=>updatename(obj.target.value)} value={pickname}/>
                        <button className="btn btn-primary" onClick={save}>Save Category</button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row">
                            <div className="col-xl-6 offset-3">
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th>Sl No</th>
                                            <th>Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            category.map((ko,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>{ko.id}</td>
                                                        <td>{ko.catname}</td>
                                                        <td><button onClick={delany.bind(this,ko.id)} className="btn btn-warning">Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
            </div>
        </div>
    )
}

export default Category;