import * as React from 'react'

export default class PrivacyView extends React.Component {
    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10 space-y-10">
                <h1 className="text-center text-5xl font-bold">{this.props.appTitle}</h1>
                <p>{this.props.description}</p>
                {this.props.components.map(component => {
                    return (
                        <DetailView component={component} appTitle={this.props.appTitle} gradient={this.props.appTitle ? [this.props.appTitle.toLowerCase() + "-primary", this.props.appTitle.toLowerCase() + "-secondary"] : []} />
                    )
                })}
            </div>
        )
    }
}

class DetailView extends React.Component {
    render() {
        return (
            <div className="w-full space-y-2">
                <h1 className="w-full text-3xl font-bold">{this.props.component.title}</h1>
                <ul className="list-disc mx-10">
                    {this.props.component.details.map((detail, index) => {
                        return <li key={index}>{detail}</li>
                    })}
                </ul>
            </div>
        )
    }
}