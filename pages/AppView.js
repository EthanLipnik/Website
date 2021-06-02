import * as React from 'react'
import DetailView from './Views/DetailView'

export default class AppView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            subtitle: props.subtitle,
            icon: props.icon,
            link: props.link,
            details: props.details,
        }
    }

    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10 space-y-20">
                <div className="space-y-16">
                    <img src={this.imageURL(this.state.icon ? this.state.icon : "")} width={330} height={330} className={`rounded-app shadow${this.state.title ? "-" + this.state.title.toLowerCase() : ""} mx-auto`} />
                    <div className="space-y-4 p-8">
                        {this.state.title ? <h1 className="text-5xl text-center font-bold">{this.state.title}</h1> : null}
                        {this.state.subtitle ? <h2 className="text-3xl text-center">{this.state.subtitle}</h2> : null}
                    </div>
                    <a href={this.state.link ? this.state.link : "/failedToGetLink"} target={this.state.link ? "_blank" : null}>
                        <div className={`mx-auto bg-gradient-to-b from-${this.state.title ? this.state.title.toLowerCase() : "neptune"}-primary to-${this.state.title ? this.state.title.toLowerCase() : "neptune"}-secondary shadow${this.state.title ? "-" + this.state.title.toLowerCase() : ""} rounded md:w-1/2 lg:w-1/4 w-full py-4 transform transition-transform duration-500 ease-in-out scale-100 hover:scale-90`}>
                            <h1 className="text-center text-4xl font-bold text-white">Get now</h1>
                        </div>
                    </a>
                </div>
                {this.state.details ? <div className="space-y-10">
                    <DetailView title={this.state.details[0].title} text={this.state.details[0].text} appTitle={this.state.title} gradient={this.state.title ? [this.state.title.toLowerCase() + "-primary", this.state.title.toLowerCase() + "-secondary"] : []} />
                    <div className="flex">
                        <div className="lg:w-1/2" />
                        <DetailView reversedRotation={true} title={this.state.details[1].title} text={this.state.details[1].text} appTitle={this.state.title} gradient={this.state.title ? [this.state.title.toLowerCase() + "-primary", this.state.title.toLowerCase() + "-secondary"] : []} />
                    </div>
                    <DetailView title={this.state.details[2].title} text={this.state.details[2].text} appTitle={this.state.title} gradient={this.state.title ? [this.state.title.toLowerCase() + "-primary", this.state.title.toLowerCase() + "-secondary"] : []} />
                </div> : null}
            </div>
        )
    }
}