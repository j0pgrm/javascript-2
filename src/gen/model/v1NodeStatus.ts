/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1AttachedVolume } from './v1AttachedVolume';
import { V1ContainerImage } from './v1ContainerImage';
import { V1NodeAddress } from './v1NodeAddress';
import { V1NodeCondition } from './v1NodeCondition';
import { V1NodeConfigStatus } from './v1NodeConfigStatus';
import { V1NodeDaemonEndpoints } from './v1NodeDaemonEndpoints';
import { V1NodeSystemInfo } from './v1NodeSystemInfo';

/**
* NodeStatus is information about the current status of a node.
*/
export class V1NodeStatus {
    /**
    * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See http://pr.k8s.io/79391 for an example.
    */
    'addresses'?: Array<V1NodeAddress>;
    /**
    * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
    */
    'allocatable'?: { [key: string]: string; };
    /**
    * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
    */
    'capacity'?: { [key: string]: string; };
    /**
    * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
    */
    'conditions'?: Array<V1NodeCondition>;
    'config'?: V1NodeConfigStatus;
    'daemonEndpoints'?: V1NodeDaemonEndpoints;
    /**
    * List of container images on this node
    */
    'images'?: Array<V1ContainerImage>;
    'nodeInfo'?: V1NodeSystemInfo;
    /**
    * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
    */
    'phase'?: string;
    /**
    * List of volumes that are attached to the node.
    */
    'volumesAttached'?: Array<V1AttachedVolume>;
    /**
    * List of attachable volumes in use (mounted) by the node.
    */
    'volumesInUse'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<V1NodeAddress>"
        },
        {
            "name": "allocatable",
            "baseName": "allocatable",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1NodeCondition>"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "V1NodeConfigStatus"
        },
        {
            "name": "daemonEndpoints",
            "baseName": "daemonEndpoints",
            "type": "V1NodeDaemonEndpoints"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<V1ContainerImage>"
        },
        {
            "name": "nodeInfo",
            "baseName": "nodeInfo",
            "type": "V1NodeSystemInfo"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "volumesAttached",
            "baseName": "volumesAttached",
            "type": "Array<V1AttachedVolume>"
        },
        {
            "name": "volumesInUse",
            "baseName": "volumesInUse",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeStatus.attributeTypeMap;
    }
}

