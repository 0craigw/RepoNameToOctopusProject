export class RepositoryNameToOctopusProject {
    convert(repositoryName : string): string {
        if(repositoryName.startsWith("sb-")) {
            repositoryName = repositoryName.replace("sb-", "LIC Services - ");
        } else {
            // don't want to replace the - in 'LIC Services - '.
            repositoryName = repositoryName.replace("-", " ");
        }
        repositoryName = repositoryName.replace(".", " ");
        repositoryName = repositoryName.replace("_", " ");
        return repositoryName;
    }
}

let helper : RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
console.log(helper.convert("UIMinda.Reports_is-Cool"));