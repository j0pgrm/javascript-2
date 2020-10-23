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
import { V1beta1AllowedCSIDriver } from './v1beta1AllowedCSIDriver';
import { V1beta1AllowedFlexVolume } from './v1beta1AllowedFlexVolume';
import { V1beta1AllowedHostPath } from './v1beta1AllowedHostPath';
import { V1beta1FSGroupStrategyOptions } from './v1beta1FSGroupStrategyOptions';
import { V1beta1HostPortRange } from './v1beta1HostPortRange';
import { V1beta1RunAsGroupStrategyOptions } from './v1beta1RunAsGroupStrategyOptions';
import { V1beta1RunAsUserStrategyOptions } from './v1beta1RunAsUserStrategyOptions';
import { V1beta1RuntimeClassStrategyOptions } from './v1beta1RuntimeClassStrategyOptions';
import { V1beta1SELinuxStrategyOptions } from './v1beta1SELinuxStrategyOptions';
import { V1beta1SupplementalGroupsStrategyOptions } from './v1beta1SupplementalGroupsStrategyOptions';

/**
* PodSecurityPolicySpec defines the policy enforced.
*/
export class V1beta1PodSecurityPolicySpec {
    /**
    * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
    */
    'allowPrivilegeEscalation'?: boolean;
    /**
    * AllowedCSIDrivers is an allowlist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is a beta field, and is only honored if the API server enables the CSIInlineVolume feature gate.
    */
    'allowedCSIDrivers'?: Array<V1beta1AllowedCSIDriver>;
    /**
    * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author\'s discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
    */
    'allowedCapabilities'?: Array<string>;
    /**
    * allowedFlexVolumes is an allowlist of Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the \"volumes\" field.
    */
    'allowedFlexVolumes'?: Array<V1beta1AllowedFlexVolume>;
    /**
    * allowedHostPaths is an allowlist of host paths. Empty indicates that all host paths may be used.
    */
    'allowedHostPaths'?: Array<V1beta1AllowedHostPath>;
    /**
    * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
    */
    'allowedProcMountTypes'?: Array<string>;
    /**
    * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.  Examples: e.g. \"foo/_*\" allows \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" allows \"foo.bar\", \"foo.baz\", etc.
    */
    'allowedUnsafeSysctls'?: Array<string>;
    /**
    * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
    */
    'defaultAddCapabilities'?: Array<string>;
    /**
    * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
    */
    'defaultAllowPrivilegeEscalation'?: boolean;
    /**
    * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.  Examples: e.g. \"foo/_*\" forbids \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" forbids \"foo.bar\", \"foo.baz\", etc.
    */
    'forbiddenSysctls'?: Array<string>;
    'fsGroup': V1beta1FSGroupStrategyOptions;
    /**
    * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
    */
    'hostIPC'?: boolean;
    /**
    * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
    */
    'hostNetwork'?: boolean;
    /**
    * hostPID determines if the policy allows the use of HostPID in the pod spec.
    */
    'hostPID'?: boolean;
    /**
    * hostPorts determines which host port ranges are allowed to be exposed.
    */
    'hostPorts'?: Array<V1beta1HostPortRange>;
    /**
    * privileged determines if a pod can request to be run as privileged.
    */
    'privileged'?: boolean;
    /**
    * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
    */
    'readOnlyRootFilesystem'?: boolean;
    /**
    * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
    */
    'requiredDropCapabilities'?: Array<string>;
    'runAsGroup'?: V1beta1RunAsGroupStrategyOptions;
    'runAsUser': V1beta1RunAsUserStrategyOptions;
    'runtimeClass'?: V1beta1RuntimeClassStrategyOptions;
    'seLinux': V1beta1SELinuxStrategyOptions;
    'supplementalGroups': V1beta1SupplementalGroupsStrategyOptions;
    /**
    * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use \'*\'.
    */
    'volumes'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean"
        },
        {
            "name": "allowedCSIDrivers",
            "baseName": "allowedCSIDrivers",
            "type": "Array<V1beta1AllowedCSIDriver>"
        },
        {
            "name": "allowedCapabilities",
            "baseName": "allowedCapabilities",
            "type": "Array<string>"
        },
        {
            "name": "allowedFlexVolumes",
            "baseName": "allowedFlexVolumes",
            "type": "Array<V1beta1AllowedFlexVolume>"
        },
        {
            "name": "allowedHostPaths",
            "baseName": "allowedHostPaths",
            "type": "Array<V1beta1AllowedHostPath>"
        },
        {
            "name": "allowedProcMountTypes",
            "baseName": "allowedProcMountTypes",
            "type": "Array<string>"
        },
        {
            "name": "allowedUnsafeSysctls",
            "baseName": "allowedUnsafeSysctls",
            "type": "Array<string>"
        },
        {
            "name": "defaultAddCapabilities",
            "baseName": "defaultAddCapabilities",
            "type": "Array<string>"
        },
        {
            "name": "defaultAllowPrivilegeEscalation",
            "baseName": "defaultAllowPrivilegeEscalation",
            "type": "boolean"
        },
        {
            "name": "forbiddenSysctls",
            "baseName": "forbiddenSysctls",
            "type": "Array<string>"
        },
        {
            "name": "fsGroup",
            "baseName": "fsGroup",
            "type": "V1beta1FSGroupStrategyOptions"
        },
        {
            "name": "hostIPC",
            "baseName": "hostIPC",
            "type": "boolean"
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean"
        },
        {
            "name": "hostPID",
            "baseName": "hostPID",
            "type": "boolean"
        },
        {
            "name": "hostPorts",
            "baseName": "hostPorts",
            "type": "Array<V1beta1HostPortRange>"
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean"
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean"
        },
        {
            "name": "requiredDropCapabilities",
            "baseName": "requiredDropCapabilities",
            "type": "Array<string>"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "V1beta1RunAsGroupStrategyOptions"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "V1beta1RunAsUserStrategyOptions"
        },
        {
            "name": "runtimeClass",
            "baseName": "runtimeClass",
            "type": "V1beta1RuntimeClassStrategyOptions"
        },
        {
            "name": "seLinux",
            "baseName": "seLinux",
            "type": "V1beta1SELinuxStrategyOptions"
        },
        {
            "name": "supplementalGroups",
            "baseName": "supplementalGroups",
            "type": "V1beta1SupplementalGroupsStrategyOptions"
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1PodSecurityPolicySpec.attributeTypeMap;
    }
}

