# Pulumi Honeycombio SDK

## Instructions for regenerating
This SDK was generated using the following command

```
npm i
pulumi package gen-sdk --local terraform-provider@0.13.0 honeycombio/honeycombio 0.42.0
npm run build
cp -r sdk/nodejs/* .
```

It is important that the version of the terraform-provider plugin used to generate this SDK matches the one installed in the spacelift runner docker image.
To update the terraform-provider version:

1. Run the above command and commit contents of the resulting nodejs SDK to this repo
2. Update the pinned tag/SHA in notion-next `src/pulumi/package.json` if needed
3. Update the Spacelift runner dockerfile to install the new version of the plugin


**DO NOT UPDATE THIS VERSION without also regenerating the SDK and updating the pinned commit in notion-next src/pulumi/package.json.**

> This provider is a derived work of the [Terraform Provider](https://github.com/honeycombio/terraform-provider-honeycombio)
> distributed under [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/). If you encounter a bug or missing feature,
> please consult the source [`terraform-provider-honeycombio` repo](https://github.com/honeycombio/terraform-provider-honeycombio/issues).
