import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {titles: []};
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        e.preventDefault();
        this.props.searchVideos(e.currentTarget.value)
            .then((res) => {
                let results = [];
                res.results.videos.forEach(video => results.push(video.title))
                this.setState({titles: results})
            })
 
    };

    render() {
        const searchResults = this.state.titles.map((title, idx) => (
            <li key={idx} className="search-list-item">{title}</li>
        ));
        return(
            <div className="search-bar-container">
                <input type="text" placeholder="Search" onChange={this.handleChange}/>
                <i className="fas fa-search"></i>
                <ul className="search-list">
                    {searchResults}
                </ul>
            </div>
        );
    };
};