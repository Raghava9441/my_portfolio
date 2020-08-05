import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
    toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <br/><br/>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              React Project #4
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #5
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvE5g6Yd-gYnns-HZhzGXLO7cqxFLOWa2HiagIW-7XfvJkvgpr&usqp=CAU) center / cover",
              }}
            >
              React Project #6
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <br/><br/>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                React Project #7
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0PDQ0NDw8NDQ0NFREWFxURFhYYHC4gGBoxGxUVIjEhJSkrLi4uFys/ODMsNygwLisBCgoKDg0NFg8PFSsdHR8tKys3LisrLS8tMCs3KyswKy0tKy4rKy0rLSsrLS8rKy0rLSsrKystLS0tKy0rMysrLf/AABEIAKgBKwMBEQACEQEDEQH/xAAaAAEBAAMBAQAAAAAAAAAAAAABAAQFBgID/8QAPBAAAgIBAgQDBQUGBQUBAAAAAAECAxEEEgUhMUEGE1EiYXGBoRQyUpGxI0JicsHwM5KisuE0NZPR8RX/xAAbAQEBAQADAQEAAAAAAAAAAAAAAQIDBAUGB//EADsRAAIBAwEECQMCBAQHAAAAAAABAgMEESEFEjFBE1FhcYGRocHwIrHRMuEGNGLxFCMzQhUkNVJysuL/2gAMAwEAAhEDEQA/AOqR9IfjokIIIQIQBAECkDQApFNIAbRA0gByIgaRA5EQNoiG0INoQaRENoQaRA0hIaEFEhRBoiFEFIgEFJAogCCkAQBAEAQBinMfHiQgggkIQAAEUpA0AKRTSAG0ANogbRA2iBtEDaIG0RDaEGkQNoSGhBpEDQkNCCiQokKQKIKJCkCiAIBApAEAQBAGKcx8eeiEIEFEIQBMAClJgoA0RTSAGkANogbQA2iKbRA2iBtCQ2iIbQg0iIbQg0hQKKIaIFEGhRAJDRAoogEFIFEAQUgCAIAgDFOY+PEhBBBIQgCAApSBQBoCmkQNIAbQA2iKbRA2iBtEDaIhtCDSIhtCDSEhogaEGhIUQUSFIFEhSBT0QpAECiAIKQBAEAYqOY+PEhBBCAIAgCBQBSKUAaQA2QNICm0QNoAbRA2jIho75R3RptlH8Srk016rlzON1YJ4cl5naha15R3o05NdzPg8ptPk11T5NM2cfB4ZA0iIaRkU6O6xZhVZJfijGTT+ZiVWEdHJI7NO2rVFmEG13HynFxbjJOMl1Uk018maTT1RhxcXiSw+0gCBoQUSFEGhIUgUSFFACQpAEgUQBBSAIAxEc58gJCCQhACAQAApFKAKgBpEU0gBtADSIG0QNo2nhvRxu1HtrMK472n0cs4in+vyOreVXCnpxeh7OxbWNe5+tZUVnx5fnwMzW+JblbNVRr8uMnFbk25YeG8pnDTsYOCcm8s71xt2sq0lSS3U8ap6+q8D7V6/Sa5KvUQVVr5Rnnv/AAy/o/qYlRq2/wBVN5Xzkc8Ly02glTuI7s+T/D9np3mt13A76rIwjF2xm8QlFfSX4f0OzSu6c4tt4wefc7Kr0qihFbyfBr36vsbKrQabQwVmpasufOMF7Sz/AAx7/F/Q6sqtW4e7T0Xz5g9KFpbWEFUuHvT6vwvd+hjX+Jrm/wBnCuEeyknN/N5RyxsIJfU2zgqbcrN/RFJduv4Mnibjq9FHU7UrK+UsemcSXw7nHRzRrunnR/P2Oxd7t3ZK4xiUfzh+HNHOHongoUQpA0j0iFEFIFEhRIUgUUAJCkCigBAIFIAw0znPkBAEhCAEAgABSBQBURTQA0gBpEDaAptEDSOi8Gff1H8tX6yPN2j+mHj7H0/8N/rrd0fc51Z79e/xPSPnVnnxPdVUrJRhFbpTeIxXdmZSUU5Pgjlp05VJKEVlvTB21F8NJCii+7dZLkm+ePn+Htl//PElB1pSnCOEj7alVhZwp0a9TMn88uSbOc8RaOyq5znKVkbG9k3/ALH6YPRtKsZw3UsNcvc+f2rbVKVdzm95S4P28OXZ4mrO0ecjouF/9t1Wembcf5I/1POr/wA1Dw+7Pfs/+m1s/wBX2Rz56B4ZIhoQUQUSGiBRBRIBIUgUSAQUgUUAIKQBgo7B8keiEIAcghZICAwWQUilAFAGkRTSAGkQNoAaRA2jpPCmlvhbKcq5RqnW1mXstyyscnz9ex5t9UpygoqWWmfT7Bt7inVlOUGotc9NcrGnHr5Hu3w1DfOdmoUISnNpKKWE3lLc3/QivnuqMYZZyT2FBTlOpWxFtvh29bfsZuk4fpdCvOdje5JKyxxfJ/hwu5wVK1W4+jHgjv29na2C6Zz46ZePTCXExNVPhds5TstlKUurzdjHosLGDmgrqEVGMcLwOpXlsutNzqTbb/8AIzq7dHqa1pY2eYtvspuXmcujTa6o67jWpS6Vxx9jvwnZ3NP/AA6nvadufXmjAt8N0NuMNQ4zX7s9k2vksM7Eb6eMyhp87zoz2LRzuwq4fU8P8GVbw2yrQT09f7SxvnjEcpzy+r/CcUa8ZXCqS0X7HZnZVKVg6EPql5c+3sOUtqnXLbOMoS9JJxZ6sZKSzF5Pmp05QluzTT7TyUyQNCQogokKIKQKJCiQpAHohSAIFEAQUwEzsnyY5IQckBZAHIBZALIKGQUilAGiBUANIgbR9tHpZ32RqrWZS9ekV3b9xipUjTi5SOzbW07iqqVNav07WdE/sfDUljztTjPbcv6QX1+J53+ddP8A7Y/PM+n/AOT2Uksb9X1/+V695gS8SaiVsJNxhVGcXKuCzmGeabfN8s+h2FY01BpavrOg9u3EqsZNqMU1lLq568eHd3G31/B1frKrmk6XDNndNxfJfPK+UWdOlc9HQlDn8+x7F1sxXF9Cs1mGNfDh558kzTeINc9TqFVXmUK5bIRX79jeG/z5L/k7lpSVKnvS4vXwPI2rdO6uOjp6qLwu18/wv3MujwrNxzZdGEmvuxhvS+LysnFLaEU/pjlHbpbAm45nUSfUln1yjW63R3aK2DbWU91dkfuvH9817zs06sK8H6o8+4tq1lVi2+1NfPNG64hpVxCmm+pJWZjCa7pOWJL5Pn8PidKlUdtUlCXD59z2bqgtoUKdamvq0T89fLj3d4eIOJT086aqJbNkMyWFJNdIp5+D/MWtCNSMpzWcjad7O3nCnReML+y9Dxp+OU3rytZVHD/fSbin6+sfivoanaTpveoy+e5iltSlXXR3UF38vyu9ehhcZ4R9nxZW99MsYfVwz0y+69H/AG+a3uek+mWkjq32z+g/zIPMH6ft1P49Wdo80UQpAogokKIKJCkCiQooASFIAkCiAa/J2j5UckA5BCyQDkAsgpZALIKGQUslNBkhpEU0QKjoPBso+bcnje647f5U3u/WJ520U9yL5ZPpf4bcVWqJ8Wljuzr7Gl11dkLbI3Z8zc3Nv95v95e47tJxcE4cDxrmFWFaca36s69vb3PkfA5DiO60dd//AOfGKeLvIag+65eyvjjCPCqSh/iW/wDbn+591bwr/wDDlFP693Ty08cY8Tl/DrjHWU7uXOSWeWJODS+vI9S7y6MsfNT5nZLjG8p73b54ePx3neHgn3RoPGMo+RWn952px9cKLy/hzX5nf2en0jfLB4e3nHoIJ8d72eT5+Doz23Sf+E5RUV6zS5tfLH9o1tBxzFc/Y49gxnu1H/tyvPn7Gn47Ga1V2/m3LKfbZj2fphfI7lq06Md08raMZq7qb/X6cvTQwDnOmdPpoyhwy3zuSkpeUpdUnjb/AKuZ5k2pXcdzx9/Q+ioqUNmT6XnnHt66o5pHpHz4g0RCiCiiFEFEFEgEhSBRQAkKQKQBrkztnyw5IBTAHJCFkFLIBZBSyClkFAFIGiBpECnui6Vc42Qk4zi8xa7ElBSi4yWjOalVnSmqkHho6SviOk10VDVRVVqWFPO1Z/hl2+D+p5joVrd71J5XV+34Pp4XtntCChdLcn18PJ8u56d58n4WmrIONkLKXOLln2Z7M8/c+Rv/AIgnF5WJe5xv+H5qrFxmpQys9ePs/TuM7inEbaNZU9ln2eENtjUJOD3Pm89OWI/U4KFGFShLVbz+ep3r28q0L2D3X0aWHo8a8ezTC9UavxPoPKsWor/w7nnMekbOuc+/r8cnasq29Ho5cV9v2PM2xadFVVen+meunJ/vx789h5o8TamEdr8uzCwpTi93zw+ZZWFJvKyhS23cwjuvEu1rXxw1kw5W362+Kb3WTe2K6RhHvy7LucyjToU21okdRzr3tdJvMnp2L9kb3i10tPXTpNLGcpw2Tlsi5Pk8rOO7fN/8nQoRVWUqtV6PT53I9y9qStqdO2tk21hvC7c6463q+zvPtxvhM9VKmyvbB7MT8zMWo9V2683+Zi2uI0VKMte45doWE7qVOpT0eNc9XLy1PhDQaPRYnqLPNtXOMMd/dD+r+hyOtWr6U1hfOf4OGNraWX1V5b0ur8L3foari3Fp6qSytlcX7MOvP8T9WdqhbxpLrZ5t7fzuZdUVwXu+37GvOwdISFEFFEKIKJCiCkCiQCQpAokAgpAprMnbPlxyAOQByQFkAsgpZALIKWQUgUAaIFIGkQNIgaR0Pg1zd01vl5cam9mXs3OSw8dPU8/aKW4njVs+h/h7fdeS3nupcM6Zb6vMZeKb42WLZVOCnNR+9GW1SeOefT3EWz4OKeWng09vV4VJLdTSbxxTxnTXX7Gy4Zx2rVy8m2qMHJZjGTVkJtdua69zrVrSVFb8ZZ9D0rPatO7l0VSG631vKfoj5cQ1uk09jrs0Kb6xkqqmpr1RqlSrVI70avqziurq1t6vRzttevdjr3GddqaNLQr3RGqUliNajCM3J9I8vqcEYTq1Nzez28jvVK1G1odM6ai3ywk89Wnr1Gnt8V2P7lMI++UnP9MHdjs6POTfzxPJnt6o/wBFNLvefwZb1tuo4bZbu22xcsyrzDlGaeP8pw9FGndKOMrt7vydt3NW42bOpnElnhpwf4OUb7931fds9U+Z7RQKJCkQ0IAg0JCiCiQCCkCiQokBAp6IUgDVZO6fMjkgHIBZIByAWQUsgpZICyU0WQUsgpZBSBogaIhTpfBL/aaj12V/rI83aX6YePsfSfw5/qVe6Puc4002n1Tafx7npacj5/DTw+IwbTTjncmtu3O7dnlj35I0samotpprj78sHf6KuVtVE9XXBXweY5xlSx19zxzx7vdy+fqNQnJUn9LPu7eEqtKnK5gt9ffr7HjXByviSd71D86O1LKpS5w2eqfd9Mnq2apqn9Dz1nzW1pV3cPplhLh1Y7Pf+xqjtHmnScH5cM1mejd2P/FFfqedcfzVPw+7PoLHTZlfP9X/AKr3OdPRPBEhoSFIFEFEhRRCiCigUSFEASFIFEhRQAkBqMnePmxyQDkAskA5BSyAWQUskKWQUgUcgpApA0QKQNGy8P69abURnLlXNOE36JtNS/NI613RdWnhcVqelsu7VtcKUv0vR/nwfpk3Or8Mq6yVtN8Y12tz+7vSb5vDT5rJ0qd+4RUJx1Wh7FfYarVHVpVUoy14Z49WvAoy0HDsuL+0ahejUpRf6Q/X4hq4ueP0x+ef2KnY7O1T6Sp5v8R+/eaLX8Tu1FisnJx2vNcYNpV/D3+879K3hTjupcfU8W5va1xUU5PGOGOXd29puNHx2q6Hka6Cku1uOWfVpc4v3r6HTqWk6ct+g/D5x8T1bfalKvDobyOe3844PtXoe5eGa7Pb0+pTrfTKVn+pMyr+UdKkNfI29i06n1UK30vx9U0XGbqtLpY6Kqe6bx5jXVLO5t+jb7egt4yq1umksIt9Up2tqrSnLL5+eXnv6uo5tHpHgCQogokKINCQCCiQogpEKIKIKJAJCkCiAac7p84IA5ALJAOQUsgDkFIhSyAWQUsg0QKQKIKbOrg05V1WO/T1q5Py42TlGUsPGOnw/M6srpKUo7reOOF+56dPZs5U4VHUhHf4Jtp/YwtTp502SqsWJweJLOe2U/yaOeE4zipR4M6lajOjUdOaw0ZtXCZeTXZLUaeqFybirJyg5YeHyxg4JXC33FQba6kd2Gz5dDGpKrCEZ9ba9jBurUJOClCai8bq3mEvgzni95ZxjvOnOChJxTTxzXDwMrR8Mtuqtuht21ZynndNqO5qKxzeDhqXEITjB8WdqhZVa1KdWHCPm9M6GGmc51TY6bhU3CN07adPCf3JXT2OxeqXodadxFScFFya6lwO/RsZuCqynGmnwcnjJi6rTumbhJwk0k81yUotNZTTOWE1OO8vU69ai6M3B4fc8oz6+DOUZTjqdI4wSc2rHiCfTPLkcDukmk4S17DvQ2c5RclWhhcdeHfoYF9eycoKcLMY9ut7oSyk+T+f0OeMt6OcY7zpVIbk3HeUsc1qjyUwQNCQogokKIKKIUQBRCiCkCiQCQpAppzvHzpZAHIA5ICyAWQUcgpAFkhRyCkCkCkQog0dRUtNKnhkNTGTUlaoSUtsIvdHlL1TeDy5dKp1nTfDHvwPpoK2lQs43Ceuca6cVx79DS8ala9Vc7klZu5pfd2pJRx7sJHdtlBUo7nA8jaDqu6qOqsSz4Y5Y8Db2bfsWh3aSeq9m3GyVsNntL8C7+/0Oos9PUxU3eHV7nqz3f8ABW+9QdXR8HJY1/p6+056yLUmnFxab9hp7o+7nzPQWGuOTwpJqTTWOzmdRGVWk+x1T1EKpUJzvrcJy3ysXPLSxyTeDy2pVukkoZ3tE9OR9InTtOgpyqqLhrJYby3x17NcGh4vpPIvtqX3U81+myXOP/r5Hft6nSU4y+ZPFvrfoK86a4cu58Px4Gz49RZc9PdTCdlMtPCMfLi57JJvMWl07fl7jrWs4w3oTeHl8T0dpUp1nTrUouUHFJYTeOOmFw+I099E6pbLIuEsJ7X1w+aO3GcZrMXlHlVKU6Ut2ccM2XCv+k4h/JR/ukdav/rUvH2PQs/5W57o/dmrO0ecKBRIUQUiFEhRBRBRIUQUSAQUgUSFEgNMd8+eIAiFHIA5ALIKQA5IUsgpApEKIKQKIKe53TlGMZSlKME1CLbain1wuxlRSbaWrOSVSUoqMm2lwXV3DdfOxp2TlNpKKc25NR9MskYRisRWCzqzqNOcm3w11PtVr74RUYX2xiukYzkor4LJmVGnJ5cU33HNC7rwioxqSSXU2fKVspS3uUnPKe9tuWV3yaUUlupaHG6knLfby+OeZWWSnJynJylLrKTbb+LCiorCWCynKcnKTy31nq26c8OcpTcYqKcm5NRXRc+xFFR4LBqdSc8Obbxpr1HvT6u6pNV22QT6qMmk364Mzpwn+qKZyUrirSWKc2u5niU3JtyblJ825Ntt+9s0kksI43JyeW8s9QtlFSjGUlGeN8U2lLHTK7kcU2m1wNxnKKaTwnx7e88lMiQ0IKJCiAJCkQp6BSIUQUQUSFEASFIFNKd4+fEAgBBSAIgEFLIAgpApEKQKIKJCkCigUiFFAogpEKeiFJA0eiAgaFEKIKIKJCiQogokAgokKIKRCiCiCiQGlO+eCQBAEAJAQKIBApZAEhSBRIUgUgUSFEFFApEKIKIKKIUSFIFPRCkCiQooFEFEhRIUQUSFEFEgEFFEKIKQKaU7x4JAEAQAgECiQECkCiAQKRCigBIUgUQUSFIFEFFEKIKJDQkKKBRICQNHohRQAkKIKRCiQogogokKIKJAIKaQ754REBAEAQKIBZAEFIhSAEFEAiFEFIFEhRBRIUQUiFEFEhRBRIUUCiQooFEhRQKJCiAJCkQp6BSIUQUQUSA//9k=) center / cover",
                }}
              >
                React Project #8
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlnza7v4ikHXTwOvn_auQm7ikL-ttsqVhKpWALS2XLQCBUM4oZ&usqp=CAU) center / cover",
                }}
              >
                React Project #9
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Angular Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Angular Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Angular Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <br/><br/>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Angular Project #4
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxAPEBAPDxAPDRAPDRAPDw8QDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFyszODMsNygtLisBCgoKDg0OFxAQFysdHR0tLS0tKystLSsrLS0rLS0rLS0tLS0tKy4tLS4tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLf/AABEIAKgBKwMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAgMBBAUHBgj/xAA9EAACAQICBwQIBQMDBQAAAAAAAQIDEQQhBRITMVFhgRQiQXEGBzKRobHB0UJScoKSI2LhVNLwFjM0ovH/xAAbAQEBAQEAAwEAAAAAAAAAAAAAAQIDBAUGB//EADQRAQABAwMDAQUIAQQDAAAAAAABAgMRBBIxBSFRQQYTcaHRIjJSYYGRscEUIzNT4RVi8P/aAAwDAQACEQMRAD8A9jtXM91ter3DtXMbTcO1cxtNw7VzG03DtXMbTcO1cxtNw7VzG03NWJJtNx1iRtTc1YkbTcZYkbTcZYkm03NWJG1NxliRtNze0jabmrEDam4doJtXc3tA2puHaBtNw7QNpuZ2gbTcO0DabmdoLtXcx4kbTcx4kbTcR4ou03EeLG03EeK5l2ruL2rmNq7h2rmNpuHauY2m4dq5jabh2rmNpuHauY2m4dq5jabh2rmNpuHauY2m4dq5jabnj7c77XLI242mRtxtMjbjaZG3G0yNuTaZMqwwZMqw2pk6rEwZMqowmTqqMGTKqTBkyqjCbmqqMGTbUmDLdqMGRtRgy3ajCbhtRg3DajBuG1GFyzajBlm1GDJXWLtTcnKuXabiOsXaZI6wwuSOsMLkjrja1lm3LtMjbjaZG3G0yNuNpkbcbTI242mRtxtMjbjaZG3G0y4NqdMMZG1GDI2owZG1GDI2owZaqgwmTqoMGTxmTCZOpkwZOpjCZMpkwZMpjCZOpjBkymTBlqkMJk2sMGWqQwZGsTBlusMGWawwZGsXBkrqDDM1kczWE3JuZcGSuYwuSOYwuSOoMNZTlUGFyR1C4ayxSbGDJtYYMldQYMhTGFyNoMGWbUYMjajBkbUYMjajBly65tga4BrgGuAa4DqQwZPGREypGRMB0wmTpkTJ0wZOmTCZOmDJkyYTJkwZMmDLbkwZFwZFwmRcuGZueCtmsMTVkjYMlbGFyRyKuSOQw1lOUhhcpuRWss1W+QXLdVLmRcslIGQoN8vMZaDilzJlUpSLgym5lwM1yoNcA1wDXAjrGkGsAawBrAamQUTCKRZEOmQUiwiiIh0A6CHRA6ImTIGTEGTmoq7aSW9t2RJmKYzM4bt267lW2imap8RGXBiNNUo+zeb/ALd3vZ4V3qFmjj7XwfRaL2U1+o71xFuP/bn9ocMfSJqXep93w1Zd5e/f8Dx6OqTn7VPZ7TU+xMRTHur07vzjt8uPm9LDaUo1N00m/wAM+6/jv6Hn2tZZucVY+PZ8trOg6/S967czHmnvDrZ5UPT8EkVcpthckbK0m2FgbN+RMtw1QSIpWFPDDSfJcX9iTVENxTMqKhGPN8WZ3TLcREEqMsDmqM1CZctSoaiEylrGgawBrAGsAawE7lQXALgFwHiyCkSIpEIrFEZmTogpECiIh0BREQyJM4WImZxHdy4jSlGH4tZ8IZ/HceHd11m365n8nvdF7NdQ1OJ2bI81dvly8zEadm8oRUFxfel9j193qVyr7kY/l9bovY3TW8Vaiqa58cR9Z+Tza1aU3eUpSfN3/wDh4FdyuvvVMy+p02jsaanbZoimPyhM5vJX0hoyrSp0K046sMTCc6L/ADKE9V/R+TRuI7PB/wAii5cropnvRjLhK26sNj6tP2Zu35XnH3Pcd7epu2/u1PWazo+i1f8Au24z5jtP7w9PD6f8KkOsPs/uewtdU/5Kf2fKaz2LmMzprn6VfWPo9KhjKdT2JJvhul7mextam1c+7U+V1fSdZpP923MR55j919lxO254UUt1UjLcFaKq1LAzlm+6ue/3GJriHSmiZdMMLGO5XfF7znNUy6RTEFqFhXNWklm3Y1CTLgrYjh72dIpYmpxzk3vN4RORRO5VFwC4Dwpt/dkZmuIWVBcX8A5e9/JyXK7i4BcDUA8SItGIZmVoojMyoiJBokaUiEUiiCkUEZOtFeOfBDCPz2lK8pVJJt6uVo3yWS8D53qFVfvqqZmcP1j2X0+n/wAC3dpoiKpzmcd8xMxy4jwX0wAAO7QejZYvE0cNDJ1aii3+WO+UukU30ERmcPG1eojT2ars+kfP0fZPWD6ORr6MdOlC0sHBVMNFb9WnG0oLzhfLikd6qe3Z8N03WVW9Vvrn7/P6+v7vgxzfbgAAATET2l+m9HJzlCetKUrSUY3bdsty96Pc9Orqqpq3TmIfnPtbZs2r9uLdEUzMTM4jnu9+jo6cs33Fz3+48+bkQ+XptTPLtp4SENyz4vNnKa5l2iiKTSiQmqHJXmoq7aRuImeCZiOXm18b+VdX9jtTR5c5r8OCpJvNu50iMMZRkUTZVSkWFTYVSFFvl5hzquRC8KSXN8yONVyZUDAA88081gGgNGJGZlaCIzMqxCKIiGRFiFIhVIkQs8VFbu8+W73lwmEJ4mUuS4Iu2BkWVmXm6TXf84r5s+c6pTi/nzEP1P2NubunzT+Gqf6lxnrn1gAAPqXqb0J/3cdNb/6FDyydSS+C6M6Wo9XyXtHq8zTYj07z/T6gzs+Wfzt6d6E7Fj6tFK1OT21Dhspt2ivJ60f2nGYxL7zpuq/yNPTVPMdp+MfV+fI88AAH0D0Fw6WF17d6dabv42SjG3wZ7TR/7f6vzv2or3a2I/DTHz7v0LgeW+bmuISrSjDOTS+bNREzw5V3Mcy8rG6Qe6Ctfxe/3Hem35cabuZ7PKqSbd223zOsdmszKMjQlIKnIqptFMhYd+OXzGWJuxHB1TS3Lr4hymuZ5aGQ5W3giJnhCeJ4K/NjDrTa8pOtLiV193T4TK0ZRIkyZIJk0QiiZEOmFweJBRMglUxkVu7z9yLtXa5qmIlLe8uCyRrGFw2LDMqRZGVYsJLi0qs4Pk17rfc9F1en7VE/F+h+w9zNq/R4mJ+TgPUPuwBbCYadWpClTWtOpOMILjKTsg53blNuia6uIjL+jdEYCng8LSoRaUKFJJyeV2leU35u76nkxGIw/NNReq1F6q5PNU//AEPwnoH6XvEaUxlOcu5i3tcKn4bNaqilxdNJv9BiirMy911TpvuNNbqiO9MYq/X/AL7Oz1v6D2+DjioK9TCSvK290JWUvc9V+SZa47ZcOiar3d73c8V/z6PihzfYgAA+k+j2JpYfA0NpJJyhKervk9acnkup7nR26pt04flXtDe3a+7meJx+0Hjpp1dbUjqJNJN5yf0R50WdvL525en0c1SXi31Z0hw71S5KzuzTyaKcQhINpyRVT1blJmIaqHEOVV3w3VS3BymqZ5LIojUklvdhDUUzPDmniOC6s1h2pteUZSb35ldoiI4YAAUSIzkBA2FwxSC4UiBWJEbVnqxuuNhEEQ5Jzb3u5prBQBAUgyMytFkZUiwjm0l7Mf1fT/B6nq9ObdM+JfaexFzGpvUeaY+UvOPQv0gBX0H1QaE2uJni5LuYZatPg601a/SN/wCSN24zOXzftFq9lqLMc1d5+Ef9v2PrS0z2fASpxdqmKexjxVO16j92X7jpcnEPS9D0vv8AVRM8Ud/o+J6Px08NiKWIp+3RqRqR52ecXyauupxh9jq7UXqKrdXEw/pGhVpYvDxkkp0cTQTs90qdSOafR2PJ5h+dVU1WbkxxNM/w/nL0h0VLB4qthpXeyqNRb/FTecJdYtM4Yw+/0moi/ZpuR6/z6vODyAB7tFqMI3e6EV8D6zT07bVMflD8U6jVN7WXqo9aqv5epoereM7fmXyNVvDm1jl1zMtxEQlIKTVb3FSaojkbHiHKbvhrRXOZmeU2URqzS3hummZ4clWu/DL5mnem1EcuSZXaO3BSgAAAB2yM4K5FXDArYkFohJViRGYn2f3L5MQQ5DTQAAGiwkrU027JNt+CzZlmXo4fR8nnLurhvf8AgzNTEyNNYWMcO3FZqUXd5vfb6nrepd7OfEw+l9kbm3qVMfipqj+/6fmj59+stir5JNt5JLNtkSZxGZf0P6HaG7FgqNB+3q69Z8ass5edt3kjyaacQ/N+oar/ACdRVc9PT4Q6NLaAwuLcZYijGs4JqGs5d1N3drPyLNMTy5WNXesRMW6ppz4cD9BtGf6Ol/7/AHJtjw7T1LVzzcl7OAwNLD040aMFTpwvqQTbUbtt2vzbNYeJcuVXKpqqnMy+b+ujQl40cfBZwtQr2/K23Tk/Jtr9yOdcer6DoGpxVVZn17x8fV8mMPqAkWIzOGa6ttM1eImXpn2MRiMPxauc1TPl7OgvYn+tfIxXy41vR1GzDlNcQNkvMOVVyZ4DDmnIqo1KiXMuG6bcy5alVvkV3ptxDmkadUpBUZlUpQAAAAAAABsSC0QkqxIhcV7K/UvkxBDlNNABqcHJ2im3yGR34fRnjN25R+5iamJq8PUoUowyikvm+piZyxM5dETKOfS0L4eqv7L/AMWn9DxdZGbFfw/h7j2fue76lYn88fvGP7fjj5t+zv1/qw0L2nHxnJXpYVKtPg53/px/kr/sNURmfg9J13V+502yOa+36ev0fXPS3S/Y8FXxF+9GGrS8b1Zd2Hxd/JHaqcRl8foNNOp1FFv0me/w9Xxb/rjSf+sqfxp/7Thuq8vt/wDw2i/4/nP1Tn6daUv/AOZU/jT/ANpqKqvLlX0jRxPa385+r0fRr0/xscZQeJxM6lB1FCtGSppKEu7rXS8LqXQsVTnvLw9X0ix7mr3VGKojtz6Ps+mNHQxWHrYefs1qcoN8G1lJc07PodZjMYfJ2btVq5TXHMS/mnHYWdGrUo1FadKpKnNf3RdnbkcX6HauU3KIrp4mMp0l3l5r5nXT07rtEfnDxeo3Pd6S7V4pn+HqQot8lzPrpl+OTciHvaEpKMJePf8AojlXy8W7cmXezDiSRVQnVS5ldKbcy5qlRsrvTREOeRW05BUpGlRkFhKRVKUAAAAAAAAbECsSIrEiFxPsrz+jELCFOm5blf5Gsrl2UcEvxO/JZIxNTM1O+nFJWSSXIywtEiKIiKxZBtelrU5x/NCS96ZzuxmiqPyl20eoi1qbVfiqP5fhj5R+8vrvq60no/BYKKqYqhGvWk6tdOecb5Rg/KNsuLZ2oqpiOXxfV7Gr1OpmabdU009o7fN4nrW9JqWKdDD4epGrSherUlB3i6j7sV0Wt/IzcqieHn9B0Fdnfcu04me0Z8er56YfSpVN5qHC5yUrm+5eh/pxhJYGgsTiadKvCGyqKpK0pOGSn1ST6nSmuMd3xeu6Zepv1e7omaZ7xh+B9aM8JVxUcVhK9KrtoWrxpyu41IWSm/ONl+3mYqmJns930aL1Fqbd2mYxxn835TR8L1Yrzy45M8rQRnUUuftLc2dMvfnER+8v09DR05Zy7i55y9x9JNcPyCaoelRoRpxsr77tt72Ymcsd5LOrwzI6Ran1c9SbZp2poiOEZFbTkBKRVSkVUpFVKRVhKQUpQAAAAAAAAICsSJKsSIpqp788wLQIikWRFYkRWJEleFN+ORHKq5EcLxSRHCq5M8tdR+BrDlu8PJx2iac7yX9OXFey3zR4Oo6fbu96fsz8n1fSPa7WaPFu7/q0eJ5j4T/Uvz+Kwk6b7yy8JLOL6npL+muWfvR28+j9O6b1rSdQpzZr7/hntMfp9ETx3tWFVKpvNQ4XOSlcwB7OjfR6rVtKf9KHGS77XKP3PMsaKu53q7R8/wBny3VParS6TNFr/Ur/AC4j4z9H6fBaPpUF3I2fjOWc31+iPb2dPbtR9mH551Dq+r6hVm7V2/DHEKzqcDyHgU2vKE5FdopiOEmwqcmVU5MqpSKqcgJTZWkpFEpMqpSKrAAAAAAAAAACkWQViyMqxIKxYRWBGZnDop0uJHKq7Ho6qcOCI8eq55WUQ4zX4DyKzGZSnU4DDrFvyjN3K7REQlON8nmhMRMYnu6UV1UVRVROJj1jl5eL0XF5w7r4P2f8Hq9R0umrva7T49H2vSvbK9ZxRq430/ij736+f5eXVpSg7STX18j0t2zXanFcYfoWj1+n1lG+xXFUfOPjHo56m8zDrc5dmj9EVa1nFasPzyyXTieTY0ty7x2jy9F1Lruk0MTFdW6r8Mc/r4fq9H6Go0LO2vNfjlZtP+1eHzPb2NHRa74zPl+cdS9odZ1DNOdlH4Y/ufX+HdKrwPLeli15RlIrrEYJJhU5MonJhU5MqpyZROTKqUmFc1WWYahjkaE5FWEmUAAAAAAAAAAA0WQViwi1NN7jLM1RHLrp0ePuRHCq74ddKnysR49Vf6uiEEg5TXKmskGYpmWbTgMNxb8kYdIIytEYVORVLGm5bs+fgSZhuIlZYCDXf7y4eByuRTcjbVGYeTptTe01cXLVU01R6wjQ0JQjNz1XP8sZu8Y9PHrc8OjQWqas8/F7zVe1Gv1FqLc1RT5mO0z9P0elrHmYfOz35Y5AK2UK2FTbKEbCkkyicmVU5MKnJlEpyKrjqvMkukNRpCSZQhQAAAAALrGctYGsMmDGmQA9Om3uXXwIzVXEcuylQXjm/gTLhVdn07OyFPjZcjLx5qdFNLwsHOZn1NPERjk9/IhTbqq7sjiNbdl8yunuscniwp0wyGwpWAjQy3FMyyaSTvv8DOXWmgYSa3e4y6VQ6bhhHE1GkrO2Yaphz7eXFhrEDby4sGIdMJ91eRWZDYQjZVI2BOc0t4VJ1Vx+DKuJLVuhlqKUXV5DLW0szUI5Km8S1Db5GoROTKMAAAAAAJmG2oQLwot8lxZtxquRC0KUVzZnLlVXVLppxT8ehMuNWXVCKW4OUzlyzrXfFmXkU25wyNVrdkG9kHrPPoJSnhiYV10K19/grhyqpVjWjx+ZWdktlVXmGqbcyTXI6xREB1Et5GsErTTjdZ2ZGojuXDe10BU69YMI4qWS8yNUua4aZcDrpy7q8isTySWIXn5BYplPtK4MLtMp33Z/MphKvTd88stxJlumlK1txG8NqO8V5sqOabKqamahmU6jzLKxwxs1CEKAAAAAAAmYbWw0e9fhYOd2cQ6pPPqHjxHYIyMdVeGZWook1Oq3ZXy4FhZoiCojR0yItVefQssU8FuRcGp1kr2z7rC+7meUlUd+pHSKYWWI5fEZTaZYjl8QbWVKt7ZWsRYjBk+4/wBQT1Nhnn0EFSnaVwfwCbRiZZLz+gKXPcNMuFPVllHyDMJBpSNHiTKxSolbdkZbwfFvPogOSc0jUQJ1KvdXhmzWGM93M2ULcqlqPMskcFuagBUAAAAK2SZXDUxkwQy06qOSV8s7h49f2p7MnXzduIWm327k1m94dMRHBkRFKTzRYZq4aiBtawTDa1fPLgJKKO3dJzb3kdIjClJ7/JlhJYmZU6YG3CGuBRPuP9QT1Phnn0CSlcjS9d5L/ngVmOULkaFwLShlG/AZIpbGyMttuRS1KiW/3eJcGUsXiG3lll1N7WInLlbKok+6vMqeqTYUtxCkm8yykMbKQExErMNuXKYFxkwXWJlcCQnkhqEBSK293mITGG+IkMmEOgh4TSauIZmMpyrcA1FJNa4awpJiUgJkFab3+TEJITIrUwhkyBkwKJ91/qDPqbDvPoIJTuFWrvJf88AzCSDeDpmVVnLKP6QsJuokMGUp1n5FiEyk2aRtZ59CpCTZFEnkvMvoRyk2Gi3LAWW8skCXgJIYRQAAAGyLPKQ1BH//2Q==) center / cover",
                }}
              >
                Angular Project #5
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Angular Project #6
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <>
          <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Vue Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Vue Project #2
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Vue Project #3
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          
        </div>
        <br/><br/>
          <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Vue Project #4
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Vue Project #5
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Vue Project #6
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

          </div>
        
        </>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoOzdm5GoyFuh2zH986RulB3_b9pewrY0a1SKDRdURKEriQdo5&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #1
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjtTYpzcBJapxpPy-YOLm1E57F-WEXM03Nt_Lf4p3JmGOB8osu&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #2
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgNxzxkxMsVfVhx92L8VfHklatX4tcIFRk0SGO54ENhTqBfo66&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #3
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <br /><br />
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                }}
              >
                MongoDB Project #4
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjtTYpzcBJapxpPy-YOLm1E57F-WEXM03Nt_Lf4p3JmGOB8osu&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #5
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                }}
              >
                MongoDB Project #6
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <br /><br />
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjtTYpzcBJapxpPy-YOLm1E57F-WEXM03Nt_Lf4p3JmGOB8osu&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #7
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgNxzxkxMsVfVhx92L8VfHklatX4tcIFRk0SGO54ENhTqBfo66&usqp=CAU) center / cover",
                }}
              >
                MongoDB Project #8
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjtTYpzcBJapxpPy-YOLm1E57F-WEXM03Nt_Lf4p3JmGOB8osu&usqp=CAU) center / cover",
                }}
              >
               MongoDB Project #9
            </CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
            </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          
          <footer class="footer-distributed">

            <div class="footer-left">

              <h3>WebDev<span>Trick</span></h3>

              <h4>our other courses </h4>
              <ul style={{color:"white"}}>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>


              <p class="footer-company-name">webdevtrick &copy; 2019</p>
            </div>

            <div class="footer-center">
              <h3>our Faculty</h3>
              <ul style={{ color: "white" }}>
                <li>Angular-sudhakar sharma</li>
                <li>Samba-Reactjs</li>
                <li>vue-samba</li>
                <li>HTML-Raju</li>
              </ul>
              
            </div>

            <div class="footer-right">

              <p class="footer-company-about">
                <h3>About the company</h3>
                <p>Founder &nbsp;<b style={{ color: "white" }}>Raghavaendara reddy</b></p>
	              Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
		          </p>

               <div class="footer-icons">

                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>

              </div>

            </div>

          </footer>
          
        </>
      );
    }
  }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
