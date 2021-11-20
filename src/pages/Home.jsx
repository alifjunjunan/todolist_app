import React from 'react'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : [
                {
                    id: 1,
                    date: "20/11/2021",
                    todo: "Intro Reactjs",
                    location: "https://media.istockphoto.com/photos/woman-using-covid19-lockdown-to-finally-finish-coding-for-a-new-picture-id1280720394?b=1&k=20&m=1280720394&s=170667a&w=0&h=eRUffvpLTljTivBkS6YMa_5RIJjOoijyEcL6KbgCp8A=",
                    note: "Prepare VsCode, Node Js and CRA",
                    status: "Done"
                }
            ]
          }
    }

    btnSubmit = () => {
        let date = this.refs.tanggal.value;
        let todo = this.refs.kegiatan.value;
        let location = this.refs.lokasi.value;
        let note = this.refs.catatan.value;
        let id = this.state.todoList.[this.state.todoList.length - 1].id;
        id++;
        
       this.state.todoList.push({id,date,todo,location,note,status: "Done"})

        this.setState({
            todoList: this.state.todoList
        })
        
        
        
    }

    printData = () => {
       return this.state.todoList.map((item,index) => {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{item.date}</td>
                    <td>{item.todo}</td>
                    <td><img src={item.location} width="100%" alt="" /></td>
                    <td>{item.note}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })

        
    }
    render() { 
        return ( 
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Date</label>
                                <input type="date" className="form-control" ref="tanggal"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">To Do</label>
                                <input type="text" className="form-control" ref="kegiatan"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Location</label>
                                <input type="text" className="form-control" ref="lokasi"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Note</label>
                                <textarea className="form-control" ref="catatan" rows="3"></textarea>
                            </div>
                                <button type="button" className="btn btn-primary" onClick={this.btnSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-md-10">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">To Do</th>
                                <th scope="col">Location</th>
                                <th scope="col">Note</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.printData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default HomePage;