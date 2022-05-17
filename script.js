const emails = ['edwin.graves@example.com', 'scarlett.jacobs@example.com', 'martin.watkins@example.com','julian.edwards@example.com','josephine.perkins@example.com','bernice.foster@example.com','bobby.wallace@example.com','brad.gibson@example.com','remedios.garcia@example.com','bruce.brady@example.com','milie.vincent@example.com','marta.dudek@example.com','gul.tanrikulu@example.com','eelis.makinen@example.com','bryan.rose@example.com']
const names=['Andrea Morgan',"Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]
globalpass=""
const nodes = document.getElementsByTagName("Input");
for (let i = 0; i < nodes.length; i++) {
    if(nodes[i].getAttribute('type')==='email')
    nodes[i].value = emails[Math.floor(Math.random()*emails.length-1)];
    if(nodes[i].getAttribute('type')==='text')
    nodes[i].value = names[Math.floor(Math.random()*names.length-1)];
    if(nodes[i].getAttribute('type')==='password'){
    if(globalpass=='')
    globalpass=names[Math.floor(Math.random()*names.length-1)]+Math.ceil(Math.random()*999);
    nodes[i].value = globalpass
    }
    if(nodes[i].getAttribute('type')==='phone' || nodes[i].getAttribute('type')==='tel')
    nodes[i].value = Math.floor(Math.random()*Math.pow(10,9));
}