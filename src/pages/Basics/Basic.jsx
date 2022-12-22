import React from 'react'
import CodeStructure from './CodeStructure/CodeStructure'
import DataTypes from './DataTypes/DataTypes'
import Hello from './Hello/Hello'
import UseStrict from './UseStrict/UseStrict'
import Variables from './Variables/Variables'
import InteractionAlert from "./InteractionAlert/InteractionAlert"
import TypeConversion from './TypeConversion/TypeConversion'
import OperatorsMathematics from './OperatorsMathematics/OperatorsMathematics'
import ComparisonOperators from './ComparisonOperators/ComparisonOperators'
import OperatorIf from './OperatorIf/OperatorIf'
import LogicalOperators from './LogicalOperators/LogicalOperators'
import NullMergeOperator from './NullMergeOperator/NullMergeOperator'
import Cycle from './Cycle/Cycle'
import Switch from './Switch/Switch'
import Function from './Function/Function'
import FunctionExpression from './FunctionExpression/FunctionExpression'
import ArrowFunctionBasic from './ArrowFunctionBasic/ArrowFunctionBasic'

function Basic() {
  return (
    <div>
        <Hello />
        <CodeStructure />
        <UseStrict />
        <Variables />
        <DataTypes />
        <InteractionAlert />
        <TypeConversion />
        <OperatorsMathematics />
        <ComparisonOperators />
        <OperatorIf />
        <LogicalOperators />
        <NullMergeOperator />
        <Cycle />
        <Switch />
        <Function />
        <FunctionExpression />
        <ArrowFunctionBasic />
    </div>
  )
}

export default Basic