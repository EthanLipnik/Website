import * as React from 'react'

export default class AppCard extends React.Component {
    render() {
        var topClass = `cursor-pointer lg:w-full h-xl bg-gray-200 dark:bg-gray-600 flex justify-center items-center rounded mx-4 my-20 lg:my-0 transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "rotate-6" : "-rotate-6"}`
        var content = <div className={`cursor-pointer bg-gradient-to-b from-${(this.props.gradient ? this.props.gradient[0] : 'bg-blue-300')} to-${(this.props.gradient ? this.props.gradient[1] : 'bg-blue-500')} w-full h-xl relative z-0 p-8 rounded shadow${this.props.appName ? '-' + this.props.appName.toLowerCase() : ''} p-8 transform transition-transform duration-500 ease-in-out ${this.props.reversedRotation ? "-rotate-6 hover:rotate-3" : "rotate-6 hover:-rotate-3"}`}>
            <div className="w-full h-full p-4 bg-white dark:bg-gray-700 bg-opacity-70 rounded shadow">
                <img src={this.props.imageURL} alt={this.props.appName} width={140} height={140} className={`mx-auto rounded shadow${this.props.appName ? '-' + this.props.appName.toLowerCase() : ''} m-5`} />
                <h3 className="text-center text-3xl font-bold select-none">{this.props.appName}</h3>
            </div>
        </div>

        if (this.props.appName == "Kano") {
            return <a href="https://kano.today" target="_blank" className={topClass}>
                {content}
            </a>
        }

        if (this.props.appName == "Sakka") {
            return <a href="https://sakka.app" target="_blank" className={topClass}>
                {content}
            </a>
        }

        return (
            <div className={topClass}>
                {content}
            </div>
        )
    }
}