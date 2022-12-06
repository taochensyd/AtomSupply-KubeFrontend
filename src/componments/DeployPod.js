import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./DeployPod.css";

const DeployPod = (props) => {
    const environment = React.useRef();
    const image = React.useRef();
    const tag = React.useRef();
    const replicas = React.useRef();
    const nodeport = React.useRef();

    const handleSubmit = () => {

        let tempData = {
            environment: environment.current.value,
            image: image.current.value,
            tag: tag.current.value,
            replicas: replicas.current.value,
            nodeport: nodeport.current.value
        }
        fetch('https://kube-api-endpoint.atom.com.au/api/v1/k8s/createDeploymentAndServiceTest', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });

    };


    return (
        <div className="">
            <h2>Create New Pod (Deployment & Service)</h2>
            <>
                <div>
                    <label htmlFor="environment">Environment: </label>
                    <input ref={environment} placeholder="Text" />
                </div>

                <div>
                    <label htmlFor="image">Image: </label>
                    <input ref={image} placeholder="Text" />
                </div>

                <div>
                    <label htmlFor="tag">Tag: </label>
                    <input ref={tag} placeholder="Text" />
                </div>

                <div>
                    <label htmlFor="replicas">Replicas: </label>
                    <input ref={replicas} placeholder="Number" />
                </div>

                <div>
                    <label htmlFor="nodeport">NodePort: </label>
                    <input ref={nodeport} placeholder="Number between 30000-32767" />
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </>
        </div>
    );
}

export default DeployPod