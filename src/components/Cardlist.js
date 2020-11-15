import React, { Component } from 'react';
import { StoryCard } from './StoryCard';

export class Cardlist extends Component {
    constructor(props){
        super(props);
        this.state={
            news:this.props.news
        }
        
    }

    componentWillReceiveProps(){
        console.log(this.props.news)
    }

    storyCard = (news) => {
        var story = news.map((user, i) => {
            const id = news[i].id;
            const title = news[i].title.rendered;
            const content = news[i].content.rendered;
            const date = news[i].date != null ? news[i].date.toString().replace('T', ' ') : null;
            const image = news[i]['_embedded']['wp:featuredmedia'] != null
                ? news[i]['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['medium_large']['source_url']
                : null;
            const imageHigh = news[i]['_embedded']['wp:featuredmedia'] != null
                ? news[i]['_embedded']['wp:featuredmedia'][0]['source_url']
                : null;
            const excerpt = news[i].excerpt.rendered;
            const author = news[i]._embedded.author[0].name;

            return (
                <StoryCard
                    key={i}
                    id={id}
                    date={date}
                    title={title}
                    content={content}
                    image={image}
                    imageHigh={imageHigh}
                    excerpt={excerpt}
                    author={author}
                />
            );
        });
        return story;
    }

    render() {
        //console.log(this.state.news)
        return (
            <div>
                {this.storyCard(this.state.news)}
            </div>
        );
    }
}