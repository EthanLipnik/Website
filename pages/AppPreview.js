import * as React from 'react'

export default class AppPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: props.appName,
            description: props.description
        };
    }

    render() {
        return (
            <div className="w-full h-xl bg-gray-200 dark:bg-gray-600 flex justify-center items-center rounded">
                <div className="bg-blue-400 w-full h-xl flex relative z-0 transform -rotate-2 rounded shadow p-8">
                    <div className="bg-white dark:bg-gray-700 rounded shadow w-1/3 p-4 transform rotate-2 z-10">
                        <img src="https://res.cloudinary.com/dz3gbu49x/image/upload/v1622340395/Neptune_qvl8pn.png" width={140} height={140} className="mx-auto rounded shadow m-5" />
                        <h3 className="text-center text-3xl font-bold">{this.state.appName}</h3>
                    </div>
                    <div className="bg-white dark:bg-gray-700 bg-opacity-70 rounded shadow w-7/12 h-xl p-4 transform rotate-2 z-0 absolute left-1/3">
                        <p className="text-center text-2xl m-auto">{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}