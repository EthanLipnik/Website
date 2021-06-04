import * as React from 'react'
import DetailView from './Views/DetailView'

export default class AppView extends React.Component {
    imageURL = (path) => {
        return "https://res.cloudinary.com/dz3gbu49x/image/upload/" + path
    }

    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10 space-y-20">
                <div className="space-y-16">
                    <img src={this.imageURL(this.props.icon ? this.props.icon : "")} width={330} height={330} className={`rounded-app shadow${this.props.title ? "-" + this.props.title.toLowerCase() : ""} mx-auto`} />
                    <div className="space-y-4 p-8">
                        {this.props.title ? <h1 className="text-5xl text-center font-bold">{this.props.title}</h1> : null}
                        {this.props.subtitle ? <h2 className="text-3xl text-center">{this.props.subtitle}</h2> : null}
                    </div>
                    <a href={this.props.link ? this.props.link : "/failedToGetLink"} target={this.props.link ? "_blank" : null}>
                        <div className={`mx-auto bg-gradient-to-b from-${this.props.title ? this.props.title.toLowerCase() : "neptune"}-primary to-${this.props.title ? this.props.title.toLowerCase() : "neptune"}-secondary shadow${this.props.title ? "-" + this.props.title.toLowerCase() : ""} rounded md:w-1/2 lg:w-1/4 w-full py-4 transform transition-transform duration-500 ease-in-out scale-100 hover:scale-90`}>
                            <h1 className="text-center text-4xl font-bold text-white">{this.props.isBeta ? "Join the beta" : "Get now"}</h1>
                        </div>
                    </a>
                </div>
                {this.props.details ? <div className="space-y-10">
                    <DetailView title={this.props.details[0].title} text={this.props.details[0].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                    <div className="flex">
                        <div className="lg:w-1/2" />
                        <DetailView reversedRotation={true} title={this.props.details[1].title} text={this.props.details[1].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                    </div>
                    <DetailView title={this.props.details[2].title} text={this.props.details[2].text} appTitle={this.props.title} gradient={this.props.title ? [this.props.title.toLowerCase() + "-primary", this.props.title.toLowerCase() + "-secondary"] : []} />
                </div> : null}
            </div>
        )
    }
}