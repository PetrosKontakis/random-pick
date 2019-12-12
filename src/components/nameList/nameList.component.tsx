import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import clearIcon from "../../assets/icons/clear-24px.svg"

type NameListComponentProps = {
    nameList: Array<string>,
    removeItemCallBack: Function,
    listTitle: String
}

export const NameListComponent: FunctionComponent<NameListComponentProps> = ({ nameList, removeItemCallBack, listTitle }) => {

    return (
        <div className="list-group">
            <div className="list-group-item list-group-item-action active">
                {listTitle}
            </div>
            {nameList.map((name, index) => (
                <div className="list-group-item list-group-item-action" key={index}>
                    {name}
                    <a
                        href="#"
                        className="btn  float-right"
                        onClick={() => { removeItemCallBack(index, name) }}>
                        <img src={clearIcon} alt="clear {name}" />
                    </a>
                </div>

            ))}
        </div>
    )

}