Change Data Capture

- Data engineer
- Developer
- Ai Developer

# Old
function createInvoice
    function createHeader
    function createDetail
    function createPayment
    function createLedger
    function updateInventory
    function createLogistic
    function updatePromo

CDC menggunakan kafka

# New (Event Driven Development)
function createInvoice
    function createTopic
    function publishTopic

function createHeader
    function consumeTopic
    function insertDatabase

function createDetail
    function consumeTopic
    function insertDatabase

1. Topic
2. Producer
3. Consumer




