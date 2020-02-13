import React from 'react';
import MaterialTreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MaterialTreeItem from '@material-ui/lab/TreeItem';
import './TreeView.scss';

// TODO: needs further work
const TreeView = ({data, style}) => {
    return (
        <MaterialTreeView
            className="tree-view-container"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            style={style}
        >
            {data.map((item, index) => {
                const key = Object.keys(item)[0];
                return (
                    <MaterialTreeItem
                        key={key}
                        className="tree-view-item"
                        nodeId={key}
                        label={item[key]}
                    >
                    </MaterialTreeItem>
                );
            })}
        </MaterialTreeView>
    );
}

export default TreeView;