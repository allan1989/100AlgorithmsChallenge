export function domainType(domains: string[]): string[] {
    const types = {'com': 'commercial', 'org': 'organization', 'net': 'network', 'info': 'information'};
    return domains.map(domain => types[domain.slice(domain.lastIndexOf('.') + 1)])
}

// console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));