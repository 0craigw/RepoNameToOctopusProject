class RepositoryNameToOctopusProject {
    convert(repositoryName : string): string {
        repositoryName = repositoryName.replace(".", " ");
        repositoryName = repositoryName.replace("_", " ");
        repositoryName = repositoryName.replace("-", " ");
        return repositoryName;
    }
}

let helper : RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
console.log(helper.convert("UIMinda.Reports_is-Cool"));