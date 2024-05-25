import React from 'react';

const MacBookSpecs = () => {
    const specs = {
        general: [
            { label: "Model Name", value: "MacBook Air M3 Chip With 8 Core CPU and 10 Core GPU Mac OS Laptop" },
            { label: "Model Number", value: "MRYU3HN/A" },
            { label: "Suitable For", value: "Editing, Processing & Multitasking" },
        ],
        portsAndSlots: [
            { label: "Charging Port", value: "MagSafe 3" },
            { label: "Audio Port", value: "3.5 mm headphone jack" },
            { label: "Data/Display Ports", value: "Two Thunderbolt / USB 4 ports with support for: Charging, DisplayPort, Thunderbolt 3 (up to 40 Gbps), USB 4 (up to 40 Gbps)" },
        ],
        inTheBox: [
            { label: "Items Included", value: "1 x MacBook Air, 35W USB-C Power Adapter, USB-C to MagSafe 3 Cable & User Manual" },
        ],
        features: [
            { label: "Operating System", value: "macOS Sonoma" },
            { label: "Processor", value: "Apple M3 chip (8-core CPU with 4 performance cores and 4 efficiency cores)" },
            { label: "Graphics", value: "10-core GPU" },
            { label: "Neural Engine", value: "16-core Neural Engine (100GB/s memory bandwidth)" },
            { label: "Keyboard", value: "Backlit Magic Keyboard" },
            { label: "Security", value: "Touch ID" },
            { label: "Sensors", value: "Ambient light sensor" },
            { label: "Trackpad", value: "Force Touch trackpad" },
            { label: "Microphone", value: "Three-mic array with Directional Beamforming" },
            { label: "Accessibility Features", value: "Various built-in accessibility features" },
            { label: "Built-in Apps", value: "Includes App Store, Books, GarageBand, Messages, QuickTime Player, Time Machine, Siri, and more." },
        ],
    };

    const renderTable = (title, data) => (
        <div>
            <h4 style={{paddingLeft:"0px",fontSize:"20px",fontWeight:"600"}}>{title}</h4>
            <table>
                <thead>
                    <tr style={{border:"1px solid #ccc" ,opacity:"0.7"}}>
                        <th>Feature</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} style={{border:"1px solid #ccc",opacity:"0.7"}}>
                            <td style={{padding:"5px"}}>{item.label}</td>
                            <td style={{padding:"5px"}}>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div>
            {renderTable("General", specs.general)}<br/>
            {renderTable("Ports & Slots", specs.portsAndSlots)}<br/>
            {renderTable("In The Box", specs.inTheBox)}<br/>
            {renderTable("Features", specs.features)}
        </div>
    );
};

export default MacBookSpecs;
