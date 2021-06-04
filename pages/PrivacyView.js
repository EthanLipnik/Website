import * as React from 'react'

export default class PrivacyView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            appTitle: props.appTitle,
            description: props.description,
            components: props.components
        }
    }

    render() {
        return (
            <div className="container mx-auto md:px-40 px-5 py-10">
                <h1 className="text-center text-5xl font-bold">{this.state.appTitle}</h1>
                <p>{this.state.description}</p>
                {this.state.components.map(component => {
                    return (
                        <DetailView component={component} appTitle={this.state.appTitle} gradient={this.state.appTitle ? [this.state.appTitle.toLowerCase() + "-primary", this.state.appTitle.toLowerCase() + "-secondary"] : []} />
                    )
                })}
            </div>
        )
    }
}

class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: props.component,
            appTitle: props.appTitle,
            reversedRotation: props.reversedRotation,
            gradient: props.gradient
        };
    }

    render() {
        return (
            <div className={`bg-gray-200 dark:bg-gray-600 justify-center items-center rounded my-8  transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                <div className={`bg-gradient-to-b from-${(this.state.gradient ? this.state.gradient[0] : 'bg-blue-300')} to-${(this.state.gradient ? this.state.gradient[1] : 'bg-blue-500')} w-full relative z-0 transform transition-transform duration-500 ease-in-out ${this.state.reversedRotation ? "rotate-2 hover:-rotate-1" : "-rotate-2 hover:rotate-1"} rounded shadow${this.state.appTitle ? "-" + this.state.appTitle.toLowerCase() : ""} p-8`}>
                    <div className={`w-full space-y-5 transform transition-transform ${this.state.reversedRotation ? "-rotate-2" : "rotate-2"}`}>
                        <h1 className="w-full text-3xl text-white font-bold">{this.state.component.title}</h1>
                        <ul className="list-disc">
                            {this.state.component.details.map((detail, index) => {
                                return <li className="text-white" key={index}>{detail}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}