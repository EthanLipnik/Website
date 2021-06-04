import * as React from 'react'

export default class PrivacyView extends React.Component {
    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10">
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
            <div className={`bg-gray-200 dark:bg-gray-600 justify-center items-center rounded my-8  transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                <div className={`bg-gradient-to-b from-${(this.props.gradient ? this.props.gradient[0] : 'bg-blue-300')} to-${(this.props.gradient ? this.props.gradient[1] : 'bg-blue-500')} w-full relative z-0 transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.props.appTitle ? "-" + this.props.appTitle.toLowerCase() : ""} p-8`}>
                    <div className={`w-full space-y-5 transform transition-transform ${this.props.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                        <h1 className="w-full text-3xl text-white font-bold">{this.props.component.title}</h1>
                        <ul className="list-disc">
                            {this.props.component.details.map((detail, index) => {
                                return <li className="text-white" key={index}>{detail}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}