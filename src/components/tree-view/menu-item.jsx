import { useState } from "react";
import Menulist from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa6'

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setdisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentlabel){
        setdisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel] : !displayCurrentChildren[getCurrentlabel],
        });
    }

    console.log(displayCurrentChildren);

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length > 0 ? <span onClick={()=>handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus  color="white" size={25}/> : <FaPlus color="white" size={25}/>
                        }
                    </span> : null
                }
            </div>

            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                    <Menulist list={item.children} />
                ) : null
            }
        </li>
    );
}