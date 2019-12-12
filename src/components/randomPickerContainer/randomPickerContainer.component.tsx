import React, { Component } from 'react';
import "./randomPickerContainer.component.scss"
import AddNameComponent from '../addName/addName.component';
import { NameListComponent } from '../nameList/nameList.component';

type RandomPickState = {
    nameList: Array<string>,
    randomPickedList: Array<string>
}

export default class RandomPickerContainer extends Component<{}, RandomPickState> {

    constructor(props: any) {
        super(props);
        this.state = {
            nameList: ["Petros", "Chai", "Inspired"],
            randomPickedList: ["Petros"]
        };
    }

    // Random pick 
    randomPickClicked = () => {
        const { nameList, randomPickedList } = this.state;
        const randomValues: Array<string> = nameList.filter(v => !randomPickedList.includes(v));

        if (randomValues.length === 0) {
            return;
        }

        const newRandomPickedList = [...randomPickedList];
        newRandomPickedList.push(randomValues[Math.floor(Math.random() * randomValues.length)])
        this.setState({
            randomPickedList: newRandomPickedList
        })
    }

    // Remove name from list & randomList if exist
    removeNameCallBack = (index: number, value: string) => {
        const newList = this.state.nameList.filter((val: string) => {
            return val !== value
        })
        this.setState({
            nameList: newList
        })
        this.removeRandomNameCallBack(index, value);
    }

    // Remove name from random list
    removeRandomNameCallBack = (index: number, value: string) => {
        const newList = this.state.randomPickedList.filter((val) => {
            return val !== value
        })
        this.setState({
            randomPickedList: newList
        })
    }

    // Add New name in list 
    addName = (value: string) => {
        const newList = [...this.state.nameList];
        if (newList.includes(value)) {
            return;
        }
        newList.push(value);
        this.setState({ nameList: newList })
    }

    // Render Container
    render() {
        return (
            <div className="container mt-4">

                <div className="row">
                    <div className="col-sm-6">
                        <AddNameComponent onValueSubmited={this.addName} />
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="colFormLabelSm"
                                className="">Randomly select</label>
                            <button className="btn btn-light form-control" onClick={this.randomPickClicked}>Select Name</button>
                        </div>

                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-6 mt-4">
                        <NameListComponent
                            nameList={this.state.nameList}
                            removeItemCallBack={this.removeNameCallBack}
                            listTitle="Name List" />
                    </div>
                    <div className="col-sm-6 mt-4">

                        <NameListComponent
                            nameList={this.state.randomPickedList}
                            removeItemCallBack={this.removeRandomNameCallBack}
                            listTitle="Random Picked" />
                    </div>
                </div>



            </div>
        )
    }
}