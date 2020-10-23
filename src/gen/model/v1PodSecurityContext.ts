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
import { V1SELinuxOptions } from './v1SELinuxOptions';
import { V1SeccompProfile } from './v1SeccompProfile';
import { V1Sysctl } from './v1Sysctl';
import { V1WindowsSecurityContextOptions } from './v1WindowsSecurityContextOptions';

/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
export class V1PodSecurityContext {
    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR\'d with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
    */
    'fsGroup'?: number;
    /**
    * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified defaults to \"Always\".
    */
    'fsGroupChangePolicy'?: string;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: V1SELinuxOptions;
    'seccompProfile'?: V1SeccompProfile;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container\'s primary GID.  If unspecified, no groups will be added to any container.
    */
    'supplementalGroups'?: Array<number>;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
    */
    'sysctls'?: Array<V1Sysctl>;
    'windowsOptions'?: V1WindowsSecurityContextOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "number"
        },
        {
            "name": "fsGroupChangePolicy",
            "baseName": "fsGroupChangePolicy",
            "type": "string"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "V1SELinuxOptions"
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "V1SeccompProfile"
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "Array<number>"
        },
        {
            "name": "sysctls",
            "baseName": "sysctls",
            "type": "Array<V1Sysctl>"
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "V1WindowsSecurityContextOptions"
        }    ];

    static getAttributeTypeMap() {
        return V1PodSecurityContext.attributeTypeMap;
    }
}

