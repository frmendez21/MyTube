import React from 'react';
import {Link} from 'react-router-dom';


export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { videos: [] };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        e.preventDefault();
        this.props.searchVideos(e.currentTarget.value)
            .then((res) => this.setState({videos: Object.values(res.results)}));
    };

    handleClick(action) {
        if(action === 'clear') {
            this.setState({videos: []})
        }
    }

    render() {
        const searchList = this.state.videos.map((video, idx) => (
            <Link key={idx} className="search-link" to="/search/results" onClick={() => this.handleClick('clear')}>
                <li className="search-list-item">{video.title}</li>
            </Link>
        ));
        return(
            <div className="search-bar-container">
                <input type="text" placeholder="Search" onChange={this.handleChange}/>
                <Link className="search-link" to="/search/results" onClick={() => this.handleClick('clear')}>
                    <i className="fas fa-search"></i>
                </Link>
                <ul className="search-list">
                    {searchList}
                </ul>
            </div>
        );
    };
};