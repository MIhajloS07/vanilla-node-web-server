// Test cases for the web server
import http from "http";
import { join } from "path";
import { readFile } from "fs";
import { describe, it, before, after } from "mocha";
import { expect } from "chai";
import server from "./server.js";

describe("Web Server", () => {
    before((done) => {
        server.listen(3001, () => {
            done();
        });
    });

    after((done) => {
        server.close(() => {
            done();
        });
    });

    it("should return 200 for existing files", (done) => {
        http.get("http://localhost:3001/index.html", (response) => {
            try {
                expect(response.statusCode).to.equal(200);
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should return 404 for non-existing files", (done) => {
        http.get("http://localhost:3001/non-existing-file.html", (response) => {
            try {
                expect(response.statusCode).to.equal(404);
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should return the correct content type for HTML files", (done) => {
        http.get("http://localhost:3001/index.html", (response) => {
            try {
                expect(response.headers["content-type"]).to.equal("text/html");
                done();
            } catch (err) {
                done(err);
            }
        });
    });        
  
    it("should return the correct content type for CSS files", (done) => {
        http.get("http://localhost:3001/styles.css", (response) => {
            try {
                expect(response.headers["content-type"]).to.equal("text/css");
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should return the correct content type for PNG files", (done) => {
        http.get("http://localhost:3001/image.png", (response) => {
            try {
                expect(response.headers["content-type"]).to.equal("image/png");
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should return the correct content type for JS files", (done) => {
        http.get("http://localhost:3001/script.js", (response) => {
            try {
                expect(response.headers["content-type"]).to.equal("text/javascript");
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should return the correct content type for unknown file types", (done) => {
        http.get("http://localhost:3001/file.unknown", (response) => {
            try {
                expect(response.headers["content-type"]).to.equal("application/octet-stream");
                done();
            } catch (err) {
                done(err);
            }
        });
    });

    it("should serve the 404.html page for non-existing files", (done) => {
        http.get("http://localhost:3001/non-existing-file.html", (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk;
            });
            response.on("end", () => {
                readFile(join("public", "404.html"), (error, file) => {
                    try {
                        expect(data).to.equal(file.toString());
                        done();
                    } catch (err) {
                        done(err);
                    }
                });
            });
        });
    });
});