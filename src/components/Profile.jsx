import React from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';


export default function Profile(props) {
  console.log(props.works)
  return(
    <Grid container className={props.classes.container}>
    
            <div className="row">
              <div className="col">
                {/* <form>
                  <div className="form-group">
                    <label htmlFor="file_upload">Upload Picture</label>
                    <input type="file" className="form-control-file" id="file_upload" onChange={this.handleFileInputChange} />
                    </div>
                </form> */}
              </div>
            </div>
    
            {workRows().map((workRow, rowIndex) =>
              <Grid container item key={`work_row_${rowIndex}`} className="row">
                {workRow.map((work, columnIndex) =>
                  <Grid item xs={4} key={`work_row_${rowIndex}_col_${columnIndex}`} 
                  component={Paper} elevation={1} className={props.classes.workContainer}>
                      <Typography variant="h6">{work.title}</Typography>
                      <Grid container item xs={12} className={props.classes.imgContainer}>
                        <img alt={work.title} src={`http://localhost:3000${work.image}`} className={props.classes.img} />
                      </Grid>
                      <Grid container item xs={12} className={props.classes.descContainer}>
                        <Typography>{work.description}</Typography>
                      </Grid>
                  </Grid>
                )}
              </Grid>
            )}
          </Grid>
        )
        function workRows() {
          let rows = []
          let row = []
          props.works.reverse().forEach((work) => {
            row.push(work)
            if (row.length === 3) {
              rows.push(row)
              row = []
            }
          })
          if (row.length > 0) {
            rows.push(row)
          }
          return rows
        }     
    }
    
//--------------------------------------------------------------------------------- 
//------------------------------------------------------ Class Component Equivelant    
    
// class Profile extends React.Component {
  
//     constructor(props) {
//           super(props)
  
//           this.state = {
//               works: this.props.works,
//               number_columns: 3,
//             }
//         }
    
//       componentDidMount(){
//             console.log(this.props)
//         }
    
//       render() { 
//             return(
//                   <Grid container className={this.props.classes.container}>
      
//                     <div className="row">
//                       <div className="col">
//                         {/* <form>
//                           <div className="form-group">
//                             <label htmlFor="file_upload">Upload Picture</label>
//                             <input type="file" className="form-control-file" id="file_upload" onChange={this.handleFileInputChange} />
//                           </div>
//                       </form> */}
//                     </div>
//                   </div>
    
//                   {this.workRows().map((workRow, rowIndex) =>
//                     <Grid container item key={`work_row_${rowIndex}`} className="row">
//                       {workRow.map((work, columnIndex) =>
//                         <Grid item xs={4} key={`work_row_${rowIndex}_col_${columnIndex}`} 
//                         component={Paper} elevation={1} className={this.props.classes.workContainer}>
//                             <Typography variant="h6">{work.title}</Typography>
//                             <Grid container item xs={12} className={this.props.classes.imgContainer}>
//                               <img alt={work.title} src={`http://localhost:3000${work.image}`} className={this.props.classes.img} />
//                             </Grid>
//                             <Grid container item xs={12} className={this.props.classes.descContainer}>
//                               <Typography>{work.description}</Typography>
//                         </Grid>
//                     </Grid>
//                   )}
//                 </Grid>
//               )}
//             </Grid>
//           )
//       }
  
//       workRows() {
//         let rows = []
//         let row = []
//         this.state.works.reverse().forEach((work) => {
//           row.push(work)
//           if (row.length === this.state.number_columns) {
//               rows.push(row)
//               row = []
//             }
//         })
//           if (row.length > 0) {
//               rows.push(row)
//             }
//             return rows
//           }
// }
  
// export default Profile;