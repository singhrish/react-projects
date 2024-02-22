
import Menulist from "./menu-list"

export default function TreeView({ menus = [] }) {

    return ( <div className="tree-view-container">
        <Menulist list={menus} />
    </div>
    );
}