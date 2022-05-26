/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* IP address information for entries in the (plural) PodIPs field. Each entry includes:    IP: An IP address allocated to the pod. Routable at least within the cluster.
*/
export class V1PodIP {
    /**
    * ip is an IP address (IPv4 or IPv6) assigned to the pod
    */
    'ip'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1PodIP.attributeTypeMap;
    }
}

