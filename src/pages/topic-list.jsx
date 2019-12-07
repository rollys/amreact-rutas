import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TopicList extends Component {
    render() {
        return (
            <div>
                Página topics
                <ul>
                    <li>
                        <Link to="/topic-list/topic-1" >Topic 1</Link>
                    </li>
                    <li>
                        <Link to="/topic-list/topic-2" >Topic 2</Link>
                    </li>
                    <li>
                        <Link to="/topic-list/topic-3" >Topic 3</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TopicList;