var assert = require('assert');
var should = require('should')
var request = require('request')
var expect = require('chai').expect
var axios = require('axios')

var baseUrl = 'https://www.swapi.co/api'


/*** basic tests ***/
describe('Sample tests', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    describe('Equals to', () => {
        it('it should return true to 1 equals to 1', () => {
            assert.equal(1 === 1, true)
        })
        it('it should return false to 1 === 2', () => {
            assert.equal(1 === 2, false)
        })
    })
});


/*** api tests ***/
describe('returns luke', function () {
    it('returns luke', function (done) {
        request.get({url: baseUrl + '/people/1/'},
            (error, response, body) => {
                const bodyObj = JSON.parse(body);
                /*** with assert ***/
                assert(bodyObj.name === "Luke Skywalker", true)

                /*** with expect ***/
                // expect(bodyObj.name).to.equal("Luke Skywalker");
                // expect(bodyObj.hair_color).to.equal("blond");
                // expect(response.statusCode).to.equal(200);
                done();
            });
    });
});

describe('custom api without axios', () => {
    it('it should return 200',(done)=>{
        request.get({url:'http://localhost:3000/getUsers'},(err,res,body)=>{

            /*** to get obj of get req ***/
            // const bodyObj = JSON.parse(body)
            // console.log(bodyObj.result)
            assert(res.statusCode ===200,true);
            done();
        })
    })
    it('post request right',(done)=>{
        request('http://localhost:3000/postUsers'.toString(),{
            method:"POST",
            json:true,
            body:{user:"HI"}
        },(err,res)=>{
            /*** to get the body of result ***/
            // console.log(res.body.result)

            assert(res.statusCode===200,true)
            done()
        })

    })
    it('post request wrong',(done)=>{
        request('http://localhost:3000/postUsers'.toString(),{
            method:"POST",
            json:true,
            body:{user:"HII"}
        },(err,res)=>{
            /*** to get the body of result ***/
            // console.log(res.body.result)

            assert(res.statusCode!==200,false)
            done()
        })

    })
})

describe('custom api with axios',()=>{
    it('get request', (done) => {
        axios.get('http://localhost:3000/getUsers').then(res => {
            assert(res.status ===200, true)
            done()
        }).catch(err=>{
            // done()
            console.log(err)
        })
    })

    it('post request', (done) => {

        // with async await you have to remove done and put async in method
        // let result = await axios.post('http://localhost:3000/postUsers', {user: "HI"})
        // assert(result.data.result , 'HI')

        axios.post('http://localhost:3000/postUsers', {user: "HI"}).then(res => {
            assert(res.status === 200,true)
            done()
        }).catch(err=>{
            console.log(err)
            // done()
        })
    })
})
